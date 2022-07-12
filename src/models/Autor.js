import mongoose from "mongoose";
//criando um schema de livros 
const autorSchema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        nacionalidade: {type: String}
    },
    {
        versionKey: false
    }
)

//define a estrutura e cria a tabela no banco, caso n exista
const autores = mongoose.model('autores', autorSchema)

export default autores;