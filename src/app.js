import express from "express";
import dotenv from "dotenv";
import "./config/database.js";
import livroRoutes from "./routes/livros.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

export default app;
