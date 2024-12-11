import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import "./config/database.js";
import LivroController from "./controllers/LivroController.js";
import autorRoutes from "./routes/autorRoutes.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

// Rotas de Livros
app.get("/livros", (req, res) => LivroController.listar(req, res));
app.get("/livros/:id", (req, res) => LivroController.obterPorId(req, res));
app.post("/livros", (req, res) => LivroController.adicionar(req, res));
app.put("/livros/:id", (req, res) => LivroController.atualizar(req, res));
app.delete("/livros/:id", (req, res) => LivroController.deletar(req, res));

// Rotas de Autores
app.use("/autores", autorRoutes);

export default app;
