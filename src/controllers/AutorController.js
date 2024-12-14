import autores from "../models/Autor.js";

class AutorController {
  static listarAutores = async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const autoresResultado = await autores
        .find()
        .skip((page - 1) * limit)
        .limit(Number(limit));
      res.status(200).json(autoresResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorResultado = await autores.findById(id);
      if (!autorResultado) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).send(autorResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarAutor = async (req, res, next) => {
    try {
      const autor = new autores(req.body);
      const autorResultado = await autor.save();
      res.status(201).send(autorResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autor = await autores.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).send({ message: "Autor atualizado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autor = await autores.findByIdAndDelete(id);
      if (!autor) {
        return res.status(404).json({ message: "Autor não encontrado" });
      }
      res.status(200).send({ message: "Autor removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };
}

export default AutorController;
