import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import "./config/database.js";
import routes from "./routes/routes.js";

dotenv.config();

const app = express();

// Configuração de segurança e middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rota principal
app.get("/", (req, res) => {
  res.status(200).send("API de Livraria");
});

// Integração das rotas
app.use("/", routes);

export default app;
