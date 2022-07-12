import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"

//tratamento de erro
db.on("error", console.log.bind(console, 'Erro de conexão'))

//mensagem de que a conexão foi feita com sucesso
db.once("open", ()=>{
    console.log('Conexão com o banco feita com sucesso')
})

//inicia o express
const app = express();

//define o formato aceito
app.use(express.json());

//executa a função do routes, que vai definir as rotas
routes(app);


//exporta o app, que vai ser usado no server.js
export default app  