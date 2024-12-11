import mongoose from "mongoose";

const LivroSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    titulo: { type: String, required: true },
    autorId: { type: Number, required: true },
    preco: { type: Number, required: true },
    anoPublicacao: { type: Number },
  },
  {
    versionKey: false,
  }
);

const Livro = mongoose.model("Livro", LivroSchema);

export default Livro;
