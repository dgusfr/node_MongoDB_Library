import livros from "../models/Livro.js";

class LivroController {
  static listarLivros = async (req, res, next) => {
    try {
      const { page = 1, limit = 10 } = req.query;
      const livrosResultado = await livros
        .find()
        .skip((page - 1) * limit)
        .limit(Number(limit))
        .populate("autor");
      res.status(200).json(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livroResultado = await livros.findById(id).populate("autor", "nome");
      if (!livroResultado) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).send(livroResultado);
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const livro = new livros(req.body);
      const livroResultado = await livro.save();
      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livro = await livros.findByIdAndUpdate(id, { $set: req.body }, { new: true });
      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).send({ message: "Livro atualizado com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      const livro = await livros.findByIdAndDelete(id);
      if (!livro) {
        return res.status(404).json({ message: "Livro não encontrado" });
      }
      res.status(200).send({ message: "Livro removido com sucesso" });
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    try {
      const editora = req.query.editora;
      const livrosResultado = await livros.find({ editora: editora });
      res.status(200).send(livrosResultado);
    } catch (erro) {
      next(erro);
    }
  };
}

export default LivroController;
