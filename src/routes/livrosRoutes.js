import express from "express";
import LivroController  from "../controllers/livrosController.js";

const router = express.Router();

//define e exporta as rotas dos livros, que vão ser utilizadas no routes/index.js. As funções estão no arquivo livroController.js
router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora)
    .get("/livros/:id", LivroController.obterPorId)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.removerPorId)

export default router;