import express from "express";
import { databaseMiddleware } from "../middleware/dbMiddleware.js";

const app = express();
const router = express.Router();

app.use(express.json());

router.get("/", (req, res) => {
  res.send("Hello world!");
});

export { router };
