import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URI;
const dbName = process.env.DB_NAME;

const client = new MongoClient(url);

export const databaseMiddleware = async (req, res, next) => {
  try {
    if (!client.isConnected) {
      await client.connect();
      console.log("Conexão com o MongoDB estabelecida.");
    }

    req.db = client.db(dbName);

    next();
  } catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error.message);
    res.status(500).json({ message: "Erro ao conectar ao banco de dados." });
  }
};
