import express from "express";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/register", async (req, res) => {
  const sql =
    "INSERT INTO tbUser (firstName, lastName, email, passCode, typeUser) VALUES (?, ?, ?, ?, 'Buyer')";
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res
      .status(400)
      .json({ message: "Todos os campos são obrigatórios." });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);

    req.db.query(
      sql,
      [firstName, lastName, email, hashPassword],
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

router.post("/login", async (req, res) => {
  let username = '';
  const sql = "SELECT id, passCode, firstName from tbUser where email = ?";
  const { email, password } = req.body;

  console.log(req.body);

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

      const isMatch = await bcrypt.compare(password, hashedPassword);
      username = result[0].firstName;

      if (!isMatch) {
        return res.status(401).json({ message: "Email ou senha inválidos" });
      }

      req.session.user = { username }
      res.status(200).json({ message: "Logado com sucesso!" });
    });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});


router.get("/", (req, res) => {
  res.status(200).json({ message: "" });
});

export { router };
