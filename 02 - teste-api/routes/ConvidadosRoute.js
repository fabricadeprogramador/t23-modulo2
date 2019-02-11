const Convidado = require('./../model/Convidado')


class ConvidadosRoute{
    constructor(app){

        this.contador = 4

        let convidado1 = new Convidado(1, "Jão", 23, "M")
        let convidado2 = new Convidado(2, "Maria", 21, "F")
        let convidado3 = new Convidado(3,"Zé", 34, "M")

        let convidados = [ convidado1, convidado2, convidado3 ]

        app.get('/convidados', function(req, res){
            res.json(convidados)
        })

        app.post('/convidados', (req, res) => {
            let convidadoNovo = req.body
            convidadoNovo.id = this.contador
            convidados.push(convidadoNovo)
            this.contador++
            res.send(convidadoNovo)
        })

        app.put('/convidados', (req, res) => {
            let convidadoEdicao = req.body
            let deuCertoEdicao = false

            for(let i = 0; i < convidados.length; i++){
                if(convidadoEdicao.id == convidados[i].id){
                    convidados.splice(i, 1, convidadoEdicao)
                    deuCertoEdicao = true
                    break;
                }
            }

            if(deuCertoEdicao){
                res.status(200).send("Convidado editado com sucesso!")
            } else {
                res.status(500).send("Erro ao editar convidado!")
            }
          
        })

        app.delete('/convidados/:posicao', (req, res) => {
           let posicaoDeletar = req.params.posicao
           convidados.splice(posicaoDeletar, 1)

           res.send("Deletado com sucesso!")
        })

        app.delete('/convidados', (req, res) => {
            let idDeletar = req.body.id
            let posicao = ""
            let objetoDeletado

            for(let i = 0; i < convidados.length; i++){
                if(convidados[i].id == idDeletar){
                    posicao = i
                }
            }

            if(posicao != ""){
               objetoDeletado =  convidados.splice(posicao, 1)
               res.send("Deletado com sucesso! " + JSON.stringify(objetoDeletado))
            } else {    
                res.send("ID Inválido!")
            }
         })
    }
}

module.exports = ConvidadosRoute