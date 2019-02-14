'use strict'

const Express = require('express')
const UsuariosRoute = require('./routes/UsuariosRoute')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
const Convidado =  require('./model/Convidado')

class App{

    constructor(){
        this.app
    }

    init(){
        //Instanciar o objeto do Express
        this.app = Express()

        //Seta o body parser no projeto
        this.app.use(BodyParser.json())

        Mongoose.connect('mongodb://t23modulo2:fdpt23@ds131905.mlab.com:31905/t23-api', { useNewUrlParser: true })

        new Convidado()

        const ConvidadosRoute = require('./routes/ConvidadosRoute')

        // new ConvidadoController()
        //Instancia o objeto responsável por definir as rotas
        new ConvidadosRoute(this.app)
        new UsuariosRoute(this.app)

        //Define a rota e o handler da rota raiz (/) da API
        this.app.get('/', function(req, res){
            res.send('Seja bem-vindo a API do Fábrica de Programador!!')
        })

        //Listener
        this.app.listen(3000, function(){
            console.log('API ouvindo porta 3000')
        })
    }
}

new App().init()

// mongodb user t23modulo2 senha fdpt23
// mongodb://<dbuser>:<dbpassword>@ds131905.mlab.com:31905/t23-api