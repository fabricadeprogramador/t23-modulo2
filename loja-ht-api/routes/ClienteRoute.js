'use strict'


const Cliente = require('./../models/Cliente')
const ClienteController = require('./../controllers/ClienteController')

class ClienteRoute{

    constructor(app){
        app.route('/cliente')
        .get(ClienteController.buscarTodos)
        .post(ClienteController.adicionar)
        .delete(ClienteController.deletar)
        .put(ClienteController.editar)

    }

}

module.exports = ClienteRoute