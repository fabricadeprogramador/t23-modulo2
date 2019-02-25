'use strict'

const Express = require('express')
const BodyParser = require('body-parser')
const Mongoose = require('mongoose')
const Convidado =  require('./model/Convidado')
const Presente = require('./model/Presente')


const env = process.NODE_ENV || 'development'
const config = require('./config.json')[env]

class App{

    constructor(){
        this.app
    }

    init(){
        //Instanciar o objeto do Express
        this.app = Express()

        //Seta o body parser no projeto
        this.app.use(BodyParser.json())

        Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.name}`, { useNewUrlParser: true })

        new Convidado()
        new Presente()

        const ConvidadosRoute = require('./routes/ConvidadosRoute')
        const PresenteRoute = require('./routes/PresenteRoute')

        // new ConvidadoController()
        //Instancia o objeto responsável por definir as rotas
        new ConvidadosRoute(this.app)
        new PresenteRoute(this.app)

        //Define a rota e o handler da rota raiz (/) da API
        this.app.get('/', function(req, res){
            res.send('Seja bem-vindo a API do Fábrica de Programador!!')
        })

        //Listener
        this.app.listen(config.port, function(){
            console.log('API ouvindo porta ' + config.port)
        })
    }
}

new App().init()

// mongodb user t23modulo2 senha fdpt23
// mongodb://<dbuser>:<dbpassword>@ds131905.mlab.com:31905/t23-api