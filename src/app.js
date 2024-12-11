import express from "express";
import dotenv from "dotenv";
import "./config/database.js";
import LivroController from "./controllers/LivroController.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

// Rotas de livros
app.get("/livros", (req, res) => LivroController.listar(req, res));
app.get("/livros/:id", (req, res) => LivroController.obterPorId(req, res));
app.post("/livros", (req, res) => LivroController.adicionar(req, res));
app.put("/livros/:id", (req, res) => LivroController.atualizar(req, res));
app.delete("/livros/:id", (req, res) => LivroController.deletar(req, res));

export default app;
