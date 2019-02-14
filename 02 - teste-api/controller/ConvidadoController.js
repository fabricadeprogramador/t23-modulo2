'use strict'

const Mongoose =  require('mongoose')
const Convidado =  Mongoose.model('Convidado')

class ConvidadoController{

    static async buscarTodos(req, res){
        try{
            res.json(await Convidado.find({}))
        }catch(error){
            res.status(500).send("Erro ao buscar convidados!")
        }
    }

    static async buscarPorNome(req, res){
        try{
            let nomeBuscar = req.params.nome
            res.json(await Convidado.find({ nome :  nomeBuscar }))
        }catch(error){
            res.status(500).send("Erro ao buscar convidados!")
        }
    }

    static async adicionar(req, res){
        try{
            console.log("CONVIDADO: " + JSON.stringify(req.body))
            let resultado = await Convidado.create(req.body)
            console.log("RESULTADO: " + resultado)
            res.status(200).json(resultado)
        } catch(error){
            res.status(500).send("Erro ao adicionar convidado!")
        }
    }

    static async deletar(req, res){
        try{
            let idDeletar = req.body._id
            console.log(idDeletar)
            let resultado = await Convidado.findByIdAndDelete(req.body)
            res.status(200).json(resultado)
        } catch(error){
            res.status(500).send("Erro ao deletar convidado!")
        }
    }
}

module.exports = ConvidadoController