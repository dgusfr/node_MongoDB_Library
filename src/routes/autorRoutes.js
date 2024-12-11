import express from "express";
import AutorController from "../controllers/AutorController.js";

const router = express.Router();

router.get("/", (req, res) => AutorController.listar(req, res));
router.get("/:id", (req, res) => AutorController.obterPorId(req, res));
router.post("/", (req, res) => AutorController.adicionar(req, res));
router.put("/:id", (req, res) => AutorController.atualizar(req, res));
router.delete("/:id", (req, res) => AutorController.deletar(req, res));

export default router;
