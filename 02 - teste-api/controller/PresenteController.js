'use strict'

const Mongoose = require('mongoose')
const Presente = Mongoose.model('Presente')

class PresenteController {


    static async buscarTodos(req, res) {

        try {
            let resultado = await Presente.find({})
            res.status(200).send(resultado)


        } catch (error) {

            res.status(500).send("Houve um erro ao buscar presentes")
        }
    }

    static async adicionar(req, res) {
        try {
            let resultado = await Presente.create(req.body)
            console.log(JSON.stringify(resultado))
            res.status(200).json(resultado)

        } catch (error) {
            console.log(error)
            res.status(500).send('Erro ao salvar presente!!!')
        }
    }

    static async editar(req, res) {
        try {
            let resultado = await Presente.findByIdAndUpdate(req.body._id, req.body)
            res.status(200).json(resultado)
        } catch(error) {
            res.status(500).send('Erro ao editar presente!!!')
        }
    }

    static async deletar(req, res){
        try{
            let resultado = await Presente.findByIdAndDelete(req.body)
            res.status(200).json(resultado)


        } catch(error){

            res.status(500).send("Erro ao deletar presente!")

        }



    }

}

module.exports = PresenteController