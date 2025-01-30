import jwt from "jsonwebtoken";
const { verify } = jwt;
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET;

export const authToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) return res.status(401).json({ error: "Token não fornecido." });

  verify(token, SECRET_KEY, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Token inválido ou expirado." });

    req.user = decoded;
    next();
  });
};
