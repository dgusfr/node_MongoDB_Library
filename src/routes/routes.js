import express from "express";
import autorRoutes from "./autorRoutes.js";
import livroRoutes from "./livroRoutes.js";

const router = express.Router();

router.use("/autores", autorRoutes);
router.use("/livros", livroRoutes);

export default router;
