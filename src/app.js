import express from "express";
import dotenv from "dotenv";
import "./config/database.js";
import {
  listarLivros,
  obterLivroPorId,
  adicionarLivro,
  atualizarLivro,
  deletarLivro,
} from "./controllers/livroController.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

app.get("/livros", listarLivros);
app.get("/livros/:id", obterLivroPorId);
app.post("/livros", adicionarLivro);
app.put("/livros/:id", atualizarLivro);
app.delete("/livros/:id", deletarLivro);

export default app;
