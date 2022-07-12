import autores from "../models/Autor.js"

//cria a classe do controller, que vai implementar vários métodos utilizando o modelo do banco. Essas funções serão utilizadas nas rotas

class AutorController{
    static listarAutores = (req, res) =>{
        autores.find((err, autores) =>{
            res.status(200).json(autores);
        })
    }

    static cadastrarAutor = (req, res) =>{
        let autor = new autores(req.body);
        autor.save((err) =>{
            if(err){
                res.status(500).send({message: `${err.message} - falha ao cadastrar Autor`})
            }else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
            if(!err){
                res.status(200).send({message: "Autor atualizado com sucesso"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
        
    }


    static obterPorId = (req, res) =>{
        const id = req.params.id
         
        autores.findById(id, (err, autores) => {
            if(err) {
              res.status(404).send({message: `${err.message} - Id do Autor não localizado.`})
            } else {
              res.status(200).send(autores);
            }
          })
        
    }

    static removerPorId = (req, res) =>{
        const id = req.params.id

        autores.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: "Autor removido com sucesso"})
            }else{
                res.status(404).send({message: "Autor não encontrado"})
            }
        })
    }
}


export default AutorController