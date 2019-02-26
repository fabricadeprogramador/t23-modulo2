'use scrict'

const Departamento = require('./../model/Departamento')
const DepartamentoController =require('./../controller/DepartamentoController')


class DepartamentoRoute{


    constructor(app){
        
        app.route('/departamentos')
        .get(DepartamentoController.buscarTodos)
        .post(DepartamentoController.adicionar)
        .delete(DepartamentoController.deletar)
        .put(DepartamentoController.editar)

        app.route('/departamentos/:nome')
        .get(DepartamentoController.buscarNome)

        
    }
}


module.exports =DepartamentoRoute