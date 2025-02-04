import express from "express";

const authRoutes = express.Router();

authRoutes.post("/verify", async (req, res) => {
  const sql = "SELECT * from tbUser where id = ?";
  const { id } = req.body;


  if (!id) {
    return res.status(400).json({ message: "ID não encontrado." });
  }

  try {
    req.db.query(sql, [id], (err, result) => {
      if (err) {
        console.error("Erro ao buscar dados:", err);
        return res.status(500).json({ message: "Error no servidor" });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: "ID não encontrado" });
      }
      res.status(200).json({ message: "ID Autenticado" });
    });
  } catch (error) {
    console.error("Error inesperado", error);
    return res.status(500).json({ message: "Error" });
  }
});

export { authRoutes };
