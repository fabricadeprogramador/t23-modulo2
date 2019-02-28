'use strict'

const Express = require('express')

const Mongoose = require('mongoose')
const env = process.NODE_ENV || 'development'
const BodyParser = require('body-parser')
const config = require('./config.json')[env]
const Cliente =  require('./models/Cliente')
const Departamento = require('./models/Departamento')

class App{

    constructor(){
        this.app
    }

    init(){
        //Instanciar o objeto do Express
        this.app = Express()

        this.app.use(BodyParser.json())

        //chamando o DB
        Mongoose.connect(`mongodb://${config.db.user}:${config.db.password}@${config.db.url}/${config.db.name}`, { useNewUrlParser: true})

        //Chamando as entidades (inserir aqui todas as entidades: cliente, usuário, departamentos, etc...)
        new Cliente();
        new Departamento()

        //Importando as rotas (inserir aqui todas as rotas das entidades: clienteRota, usuárioRota, etc...)
        const ClienteRoute = require('./routes/ClienteRoute')
        const DepartamentoRoute = require('./routes/DepartamentoRoute')

        //instanciando o objeto responsável por definir as rotas (instanciar aqui todas os objetos que 
        // definem as rotas)
        new ClienteRoute(this.app)
        new DepartamentoRoute(this.app)
        
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



