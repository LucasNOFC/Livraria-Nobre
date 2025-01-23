import express from "express";
import { databaseMiddleware } from "./src/middleware/dbMiddleware.js";
import { router } from "./src/routes/routes.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(databaseMiddleware);
app.use("/", router);

const PORT = 5100;

app.listen(PORT, () => {
  console.log("Server is running on path -> http://localhost:5100");
});
