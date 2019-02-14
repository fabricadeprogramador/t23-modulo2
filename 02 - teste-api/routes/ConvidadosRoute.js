const Convidado = require('./../model/Convidado')
const ConvidadoController = require('./../controller/ConvidadoController')


class ConvidadosRoute{
    constructor(app){


        app.route('/convidados')
            .get(ConvidadoController.buscarTodos)
            .post(ConvidadoController.adicionar)
            .delete(ConvidadoController.deletar)

        app.route('/convidados/:nome')
            .get(ConvidadoController.buscarPorNome)
            

        // app.get('/convidados', function(req, res){
        //     res.json(convidados)
        // })

        // app.get('/convidados/:id', (req, res) => {
        //     let idConvidado = req.params.id
        //     let convidadoRetorno = null    

        //     for(let i = 0; i < convidados.length; i++){
        //         if(convidados[i].id == idConvidado){
        //             convidadoRetorno = convidados[i]
        //         }
        //     }

        //     if(convidadoRetorno != null){
        //         res.status(200). send(JSON.stringify(convidadoRetorno))
        //     } else {
        //         res.status(500).send("Erro ao buscar convidado!")
        //     }
        // })

        // app.post('/convidados', (req, res) => {
        //     let convidadoNovo = req.body
        //     convidadoNovo.id = this.contador
        //     convidados.push(convidadoNovo)
        //     this.contador++
        //     res.send(convidadoNovo)
        // })

        // app.put('/convidados', (req, res) => {
        //     let convidadoEdicao = req.body
        //     let deuCertoEdicao = false

        //     for(let i = 0; i < convidados.length; i++){
        //         if(convidadoEdicao.id == convidados[i].id){
        //             convidados.splice(i, 1, convidadoEdicao)
        //             deuCertoEdicao = true
        //             break;
        //         }
        //     }

        //     if(deuCertoEdicao){
        //         res.status(200).send("Convidado editado com sucesso!")
        //     } else {
        //         res.status(500).send("Erro ao editar convidado!")
        //     }
          
        // })

        // app.delete('/convidados/:posicao', (req, res) => {
        //    let posicaoDeletar = req.params.posicao
        //    convidados.splice(posicaoDeletar, 1)

        //    res.send("Deletado com sucesso!")
        // })

        // app.delete('/convidados', (req, res) => {
        //     let idDeletar = req.body.id
        //     let posicao = ""
        //     let objetoDeletado

        //     for(let i = 0; i < convidados.length; i++){
        //         if(convidados[i].id == idDeletar){
        //             posicao = i
        //         }
        //     }

        //     if(posicao != ""){
        //        objetoDeletado =  convidados.splice(posicao, 1)
        //        res.send("Deletado com sucesso! " + JSON.stringify(objetoDeletado))
        //     } else {    
        //         res.send("ID Inválido!")
        //     }
        //  })
    }
}

module.exports = ConvidadosRoute