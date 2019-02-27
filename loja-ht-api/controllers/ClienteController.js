'use strict'

const Mongoose = require('mongoose')
const Cliente = Mongoose.model('Cliente')

class ClienteController{

    static async buscarTodos(req, res){
        try{
            res.json(await Cliente.find({}))
        
        }
        
        catch(error){
            res.status(500).send("Erro ao buscar Clientes!")
        
        }

    }

    static async adicionar(req, res){
        
        try{
            console.log("Cliente: " + JSON.stringify(req.body))
            let adicionarCliente = await Cliente.create(req.body)
            // console.log(adicionarCliente)
            res.status(200).send("Cliente " + adicionarCliente + " adicionado com sucesso!")
        
        }
        
        catch(error){
            console.log(error)
            res.status(500).send("Erro interno, não foi possível adicionar o cliente, tente novamente ou contate o administrador do site")
        
        }
    
    }
    
    // static async deletar(req, res){
    //     try{

    //     } catch(error){

    //     }
    
    // }
    
    // static async editar(req, res){
    //     try{

    //     } catch(error){

    //     }
    
    // }

}

module.exports = ClienteController