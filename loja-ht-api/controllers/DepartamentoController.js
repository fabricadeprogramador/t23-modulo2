'use scrict'


const Mongoose = require('mongoose')
const Departamento = Mongoose.model('Departamento')

class DepartamentoController {

    static async buscarTodos(req, res) {

        try {
            console.log("Chamou GET Departamentos")
            res.json(await Departamento.find({}))
            console.log("Chamou GET Departamentos")

        } catch (error) {
            console.log(error)
            res.status(500).send('Impossivel buscar o Departamento')

        }
    }
    static async adicionar(req, res) {
        try {

            console.log('Departamento' + JSON.stringify(req.body))
            let resultado = await Departamento.create(req.body)
            console.log('Resultado' + resultado)
            res.status(200).json(resultado)

        } catch (error) {

            res.status(500).send('Impossivel adicionar o Departamento')

        }
    }
    static async deletar(req, res) {
        try {
            let idDeletar = req.body._id
            let resultado = await Departamento.findByIdAndDelete(req.body)
            res.status(200).json(resultado)




        } catch (error) {
            console.log(error)
            res.status(500).send('Impossivel deletar o departamento')

        }
    }

    static async editar(req, res) {
        try {
            let resultado = await Departamento.findByIdUpdate(req.body._id, req.body)
            console.log(resultado)
            res.status(200).send(resultado)


        } catch (error) {

            res.status(500).send('Impossivel editar o departamento')

        }
    }

    static async buscarNome(req, res) {
        try {
            let resultado = await Departamento.findByIdUpdate(req.body._id, req.body)
            console.log(resultado)
            res.status(200).send(resultado)


        } catch (error) {

            res.status(500).send('Impossivel buscarcls o departamento')

        }
    }

}

module.exports = DepartamentoController