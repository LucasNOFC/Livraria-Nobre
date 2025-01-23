import pool from "../database/dbConfig.js";

export const databaseMiddleware = (req, res, next) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.log("Erro ao se conectar ao Banco:", err.message);
      return res
        .status(500)
        .json({ message: "Erro ao se conectar ao banco de dados." });
    }

    req.db = connection;

    res.on("finish", () => {
      connection.release();
    });

    next();
  });
};
