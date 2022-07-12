import express from "express";
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

//define as rotas e exporta. As rotas são importadas de livros/autores pra melhorar a organização
const routes = (app) =>{
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: 'Curso de node'})
    })

    app.use(
        express.json(),
        livros,
        autores
    )
}

export default routes;