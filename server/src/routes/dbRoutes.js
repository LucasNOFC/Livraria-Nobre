import express from "express";
import jwt from "jsonwebtoken";
const { sign } = jwt;
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import multer from "multer";
import { Blob } from "buffer";
import dotenv from "dotenv";

dotenv.config();

const storage = multer.memoryStorage();
const dbRoutes = express.Router();
const upload = multer({ storage });

dbRoutes.get("/profile-photo/:userID", async (req, res) => {

  const {userID} = req.params;

  try {
    const sql = "SELECT * from tbProfile where userID = ?";
    req.db.query(sql, [userID], (err, result) => {
      if (err) {
        console.error("Erro ao buscar foto de perfil:", err);
        return res.status(500).json({message: "Erro ao buscar foto."});
      } 

      if (result.length === 0 || !result[0].profile_picture) {
        return res.status(404).json({message: "Nenhuma foto encontrada."});
      }

      const profilePictureBase64 = result[0].profile_picture.toString('base64');

      res.status(200).json({ data: {profile_picture: profilePictureBase64, preferences: result[0].preferences} });
    });
  } catch (err) {
    console.error("Erro ao buscar foto de perfil:", err);
    return res.status(500).json({message:"Erro interno do servidor."})
  }
})

dbRoutes.post(
  "/register/profile-photo",
  upload.single("profilePhoto"),
  async (req, res) => {
    const userID = req.body.userID;
    const imageBuffer = req.file?.buffer;

    if (!userID || !imageBuffer)
      return res.status(400).json({ message: "Dados insuficientes" });

    try {
      const sql =
        "INSERT INTO tbProfile (userId, profile_picture) values (? , ?) on DUPLICATE KEY UPDATE profile_picture = ?";
      req.db.query(sql, [userID, imageBuffer, imageBuffer], (err, result) => {
        if (err) {
          console.error("Erro ao salvar foto de perfil:", err);
          return res.status(500).json({ message: "Erro ao salvar." });
        }
        res.status(200).json({ message: "Foto de perfil salva!" });
      });
    } catch {
      console.error("Erro.");
      return res.status(500).json({ message: "Erro interno do servidor." });
    }
  }
);

dbRoutes.post("/register", async (req, res) => {
  const sql =
    "INSERT INTO tbUser (firstName, lastName, email, passCode,id, typeUser) VALUES (?, ?, ?, ?,?, 'Buyer')";
  const { firstName, lastName, email, password } = req.body;

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

      res.status(200).json({
        message: "Logado com sucesso",
        details: { token, username: result[0].firstName, id: result[0].id },
      });
    });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});

dbRoutes.get("/getUser/:id", async (req, res) => {
  const sql = "SELECT firstName, email, typeUser FROM tbUser where id = ?";
  const { id } = req.params;

  req.db.query(sql, [id], async (err, result) => {
    if (err) return res.status(500).json({ message: "Erro no servidor." });

    if (result.length === 0)
      return res.status(404).json({ message: "Nenhum usuário encontrado." });

    res.status(200).json({ message: "Usuário encontrado!", user: result[0] });
  });
});

export { dbRoutes };
