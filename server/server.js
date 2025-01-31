import express from "express";
import { Session } from "express-session";
import { databaseMiddleware } from "./src/middleware/dbMiddleware.js";
import { router } from "./src/routes/routes.js";
import { dbRoutes } from "./src/routes/dbRoutes.js";
import { authRoutes } from "./src/routes/authRoutes.js";
import cors from "cors";
import dotenv from "dotenv";
import { authToken } from "./src/middleware/authMiddleware.js";

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(databaseMiddleware);

app.use("/", dbRoutes);
app.use("/", authRoutes);
app.use("/", router);
const PORT = 5100;

app.listen(PORT, () => {
  console.log("Server is running on path -> http://localhost:5100");
});
