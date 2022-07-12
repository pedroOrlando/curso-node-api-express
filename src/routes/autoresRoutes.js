import express from "express";
import AutorController  from "../controllers/autoresController.js";

const router = express.Router();

//define e exporta as rotas dos autores, que vão ser utilizadas no routes/index.js. As funções estão no arquivo autoresController.js
router
    .get("/autores", AutorController.listarAutores)
    .get("/autores/:id", AutorController.obterPorId)
    .post("/autores", AutorController.cadastrarAutor)
    .put("/autores/:id", AutorController.atualizarAutor)
    .delete("/autores/:id", AutorController.removerPorId)


export default router;