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

        app.put('/convidados', function(req, res){
            res.send("PUT para /convidados não implementado!")
        })

        app.delete('/convidados/:posicao', (req, res) => {
           let posicaoDeletar = req.params.posicao
           convidados.splice(posicaoDeletar, 1)

           res.send("Deletado com sucesso!")
        })
    }
}

module.exports = ConvidadosRoute