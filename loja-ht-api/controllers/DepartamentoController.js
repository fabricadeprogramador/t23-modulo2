'use scrict'


const Mongoose = require('mongoose')
const Departamento = require('./../model/Departamento')

class DepartamentoController{

        static async buscarTodos(req,res){
            
            try {

                res.json(await Departamento.find({}))

                
            } catch (error) {
                
                res.status(500).send('Impossivel buscar o Departamento')
                
            }
    }
    static async adicionar(req,res){
        try {

            console.log('Departamento' +JSON.stringify(req.body))
            let resultado = await Departamento.create(req.body)
            console.log('Resultado'+resultado)
            res.status(200).json(resultado)
            
        } catch (error) {
            
            res.status(500).send('Impossivel adicionar o Departamento')
            
        }
}
static async deletar(req,res){
    try {
        let idDeletar=  req.body_id
        let resultado = await Departamento.findByIdDelete(req.body)
        res.status(200).json(resultado)

        

        
    } catch (error) {
        
        res.status(500).send('Impossivel deletar o departamento')

    }
}

static async editar(req,res){
    try {
    let resultado = await Departamento.findByIdUpdate(req.body._id, req.body)
    console.log(resultado)
    res.status(200).send(resultado)
    
        
    } catch (error) {
        
        res.status(500).send('Impossivel editar o departamento')
        
    }
}

}

module.exports = DepartamentoController