'use strict'

const Express = require('express')

const env = process.NODE_ENV || 'development'
const config = require('./config.json')[env]
const Usuario = require('./models/Usuario')

class App{

    constructor(){
        this.app
    }

    init(){
        //Instanciar o objeto do Express
        this.app = Express()

        new Usuario()

        const UsuariosRoute = require('./routes/UsuariosRoute')

        new UsuariosRoute(this.app)

        //Define a rota e o handler da rota raiz (/) da API
        this.app.get('/', function(req, res){
            res.send('Seja bem-vindo a API da Loja HT!!')
        })

        //Listener
        this.app.listen(config.port, function(){
            console.log('API ouvindo porta ' + config.port)
        })
    }
}

new App().init()