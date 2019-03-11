'use strict'

const PresenteController = require('../controller/PresenteController')

class PresenteRoute{

    constructor(app){
        app.route('/presentes')
        .get(PresenteController.buscarTodos)
        .post(PresenteController.adicionar)
        .put(PresenteController.editar)
        .delete(PresenteController.deletar)
    }

}

module.exports = PresenteRoute