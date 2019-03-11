const Usuario = require('./../models/Usuario')
const UsuarioController = require('./../controllers/UsuarioController')

class UsuariosRoute{
    constructor(app){

        app.route('/usuarios')
            .get(UsuarioController.buscarTodos)
            .post(UsuarioController.adicionar)
            .delete(UsuarioController.deletar)
            .put(UsuarioController.editar)
    }
}

module.exports = UsuariosRoute