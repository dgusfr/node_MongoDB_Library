import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Conexão com o MongoDB estabelecida com sucesso.");
});

db.on("error", (error) => {
  console.error("Erro na conexão com o MongoDB:", error);
});

export default mongoose;
