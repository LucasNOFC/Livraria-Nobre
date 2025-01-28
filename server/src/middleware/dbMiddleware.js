import pool from "../database/dbConfig.js";

export const databaseMiddleware = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("Erro ao se conectar ao Banco:", err);

      if (err.code === "ECONNREFUSED")
        return res.status(500).json({ message: "Banco de dados está desligado" });

      return res.status(500).json({ message: "." });
    }

    req.db = connection;

    res.on("finish", () => {
      connection.release();
    });

    next();
  });
};
