import express from "express";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { v4 as uuidv4} from "uuid";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const dbRoutes = express.Router();

dbRoutes.post("/register", async (req, res) => {
  const sql =
    "INSERT INTO tbUser (firstName, lastName, email, passCode,id, typeUser) VALUES (?, ?, ?, ?,?, 'Buyer')";
  const { firstName, lastName, email, password} = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const id = uuidv4();
    req.db.query(
      sql,
      [firstName, lastName, email, hashPassword, id],
      (err, result) => {
        if (err) {
          console.error("Erro ao inserir dados:", err);

          if (err.code === "ER_DUP_ENTRY")
            return res.status(409).json({ message: "Email já cadastrado." });
          return res.status(500).json({ message: "Erro ao cadastrar" });
        }
        res.status(201).json({ message: "Cadastrado com sucesso!" });
      }
    );
  } catch (err) {
    console.log("error");
  }
});

dbRoutes.post("/login", async (req, res) => {
  const sql = "SELECT id, passCode, firstName from tbUser where email = ?";
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios" });
  }

  try {
    req.db.query(sql, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Erro no servidor" });
      }

      if (result.length === 0) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      const hashedPassword = result[0].passCode;
      const username = result[0].firstName;

      const isMatch = await bcrypt.compare(password, hashedPassword);

      if (!isMatch) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      const token = sign(
        { userID: result[0].id, username: username },
        process.env.SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({ message: "Logado com sucesso!", token });
    });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});

export { dbRoutes };
