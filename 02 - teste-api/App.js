'use strict'

const Express = require('express')
const ConvidadosRoute = require('./routes/ConvidadosRoute')
const UsuariosRoute = require('./routes/UsuariosRoute')
const BodyParser = require('body-parser')

class App{

    constructor(){
        this.app
    }

    init(){

        //Instanciar o objeto do Express
        this.app = Express()

        //Seta o body parser no projeto
        this.app.use(BodyParser.json())

        //Define a rota e o handler da rota raiz (/) da API
        this.app.get('/', function(req, res){
            res.send('Seja bem-vindo a API do Fábrica de Programador!!')
        })

        //Instancia o objeto responsável por definir as rotas
        new ConvidadosRoute(this.app)
        new UsuariosRoute(this.app)

        //Listener
        this.app.listen(3000, function(){
            console.log('API ouvindo porta 3000')
        })
    }
}

new App().init()