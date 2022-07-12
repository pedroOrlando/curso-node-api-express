import mongoose from "mongoose";

//define os parametros de conexão com o banco de dados
const string = "mongodb+srv://pedro-orlando:Pedro123@alura.5vdzzyj.mongodb.net/alura-node";
mongoose.connect(string)

//conecta com o banco e exporta a conexão
let db = mongoose.connection;

export default db;