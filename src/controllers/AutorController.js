import Autor from "../models/Autor.js";

class AutorController {
  async listar(req, res) {
    try {
      const autores = await Autor.find();
      res.status(200).json(autores);
    } catch (err) {
      res.status(500).send("Erro ao buscar autores.");
    }
  }

  async obterPorId(req, res) {
    try {
      const autor = await Autor.findOne({ id: req.params.id });
      if (!autor) return res.status(404).send("Autor não encontrado.");
      res.status(200).json(autor);
    } catch (err) {
      res.status(500).send("Erro ao buscar o autor.");
    }
  }

  async adicionar(req, res) {
    try {
      const autor = new Autor(req.body);
      await autor.save();
      res.status(201).json(autor);
    } catch (err) {
      res.status(400).send("Erro ao adicionar o autor.");
    }
  }

  async atualizar(req, res) {
    try {
      const autor = await Autor.findOneAndUpdate(
        { id: req.params.id },
        req.body,
        { new: true }
      );
      if (!autor) return res.status(404).send("Autor não encontrado.");
      res.status(200).json(autor);
    } catch (err) {
      res.status(400).send("Erro ao atualizar o autor.");
    }
  }

  async deletar(req, res) {
    try {
      const autor = await Autor.findOneAndDelete({ id: req.params.id });
      if (!autor) return res.status(404).send("Autor não encontrado.");
      res.status(204).send();
    } catch (err) {
      res.status(500).send("Erro ao deletar o autor.");
    }
  }
}

export default new AutorController();
