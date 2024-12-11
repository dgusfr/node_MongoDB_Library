import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    nome: { type: String, required: true },
    nacionalidade: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);

const Autor = mongoose.model("Autor", AutorSchema);

export default Autor;
