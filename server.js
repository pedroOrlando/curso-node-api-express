/*Utilizando os recursos nativos do node
const http = require('http')
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': "Entrei na pag de livros",
    '/autores': 'Listagem de autores',
    '/editora': 'Pagina de editora',
    '/sobre': 'Sobre o projeto'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

*/

import app from './src/app.js'

//define a porta como a porta do processo (caso esteja em outro servidor que não o local). Se não existir, define a 3000 como padrão
const port = process.env.port || 3010;

//inicia o servidor, que vai ficar escutando na porta definida
app.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})