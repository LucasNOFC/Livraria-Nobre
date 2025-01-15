import express from "express";
import { databaseMiddleware } from "./src/middleware/dbMiddleware.js";
import { router } from "./src/routes/routes.js";
const app = express();

app.use(databaseMiddleware);
app.use("/", router);

app.listen(5100, () => {
  console.log("Server is running on path -> http://localhost:5100");
});
