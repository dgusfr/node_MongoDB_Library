import Livro from "../models/Livro.js";

class LivroController {
  async listar(req, res) {
    try {
      const livros = await Livro.find();
      res.status(200).json(livros);
    } catch (err) {
      res.status(500).send("Erro ao buscar livros.");
    }
  }

  async obterPorId(req, res) {
    try {
      const livro = await Livro.findOne({ id: req.params.id });
      if (!livro) return res.status(404).send("Livro não encontrado.");
      res.status(200).json(livro);
    } catch (err) {
      res.status(500).send("Erro ao buscar o livro.");
    }
  }

  async adicionar(req, res) {
    try {
      const livro = new Livro(req.body);
      await livro.save();
      res.status(201).json(livro);
    } catch (err) {
      res.status(400).send("Erro ao adicionar o livro.");
    }
  }

  async atualizar(req, res) {
    try {
      const livro = await Livro.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
      if (!livro) return res.status(404).send("Livro não encontrado.");
      res.status(200).json(livro);
    } catch (err) {
      res.status(400).send("Erro ao atualizar o livro.");
    }
  }

  async deletar(req, res) {
    try {
      const livro = await Livro.findOneAndDelete({ id: req.params.id });
      if (!livro) return res.status(404).send("Livro não encontrado.");
      res.status(204).send();
    } catch (err) {
      res.status(500).send("Erro ao deletar o livro.");
    }
  }
}

export default new LivroController();
