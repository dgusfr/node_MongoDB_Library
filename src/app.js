import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import "./config/database.js";
import LivroController from "./controllers/LivroController.js";

dotenv.config();

const app = express();

// Middleware de segurança
app.use(helmet());
app.use(cors());

// Middleware para JSON
app.use(express.json());

// Rotas da API
app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

app.get("/livros", (req, res) => LivroController.listar(req, res));
app.get("/livros/:id", (req, res) => LivroController.obterPorId(req, res));
app.post("/livros", (req, res) => LivroController.adicionar(req, res));
app.put("/livros/:id", (req, res) => LivroController.atualizar(req, res));
app.delete("/livros/:id", (req, res) => LivroController.deletar(req, res));

export default app;
