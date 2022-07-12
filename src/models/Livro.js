import mongoose from "mongoose";
//criando um schema de livros 
const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true}, //indica que é referencia pra autores
        editora: {type: String, required: true},
        numeroPaginas: {type: Number}
    }
)

//define a estrutura e cria a tabela no banco, caso n exista
const livros = mongoose.model('livros', livroSchema)

export default livros;