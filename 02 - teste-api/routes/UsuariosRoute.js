const Usuario = require('./../model/Usuario')

class UsuariosRoute{
    constructor(app){

        let usuario1 = new Usuario("aaaa", "123")
        let usuario2 = new Usuario("bbbb", "123")
        let usuario3 = new Usuario("cccc", "123")

        let usuarios = [ usuario1, usuario2, usuario3 ]

        app.get('/usuarios', function(req, res){
            res.send(usuarios)
        })

        app.post('/usuarios', function(req, res){
            res.send("POST para usuarios não implementado!")
        })

        app.put('/usuarios', function(req, res){
            res.send("PUT para usuarios não implementado!")
        })

        app.delete('/usuarios', function(req, res){
            res.send("DELETE para usuarios não implementado!")
        })
    }
}

module.exports = UsuariosRoute