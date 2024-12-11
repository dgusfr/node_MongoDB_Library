import express from "express";
import Livro from "../models/Livro.js";

const router = express.Router();

// Listar todos os livros
router.get("/", async (req, res) => {
  const livros = await Livro.find();
  res.status(200).json(livros);
});

// Obter um livro por ID
router.get("/:id", async (req, res) => {
  const livro = await Livro.findById(req.params.id);
  if (!livro) return res.status(404).send("Livro não encontrado.");
  res.status(200).json(livro);
});

// Adicionar um novo livro
router.post("/", async (req, res) => {
  const livro = new Livro(req.body);
  await livro.save();
  res.status(201).json(livro);
});

// Atualizar um livro por ID
router.put("/:id", async (req, res) => {
  const livro = await Livro.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!livro) return res.status(404).send("Livro não encontrado.");
  res.status(200).json(livro);
});

// Deletar um livro por ID
router.delete("/:id", async (req, res) => {
  const livro = await Livro.findByIdAndDelete(req.params.id);
  if (!livro) return res.status(404).send("Livro não encontrado.");
  res.status(204).send();
});

export default router;
