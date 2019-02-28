const Produto = require('./../models/Produto')
const ProdutoController = require('./../controllers/ProdutoController')

class ProdutoRoute {
    constructor(app){

        app.route('/produto')
            .get(ProdutoController.buscarTodos)
            .post(ProdutoController.adicionar)
            .delete(ProdutoController.deletar)
            .put(ProdutoController.editar)

        app.route('/produto/:nomeProduto')
            .get(ProdutoController.buscarPorNome)
        
    }
}

module.exports = ProdutoRoute