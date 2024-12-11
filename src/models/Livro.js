import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    anoPublicacao: { type: Number },
    preco: { type: Number, required: true },
  },
  {
    versionKey: false,
  }
);

const Livro = mongoose.model("Livro", LivroSchema);

export default Livro;
