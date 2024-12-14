import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor", required: true },
  editora: { type: String, required: true },
  preco: { type: Number, required: true, min: 0 },
  anoPublicacao: { type: Number, required: true, min: 1500 },
}, {
  versionKey: false,
});

const Livro = mongoose.model("Livro", LivroSchema);

export default Livro;
