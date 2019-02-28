'use strict'

const Mongoose = require('mongoose')

class Cliente extends Mongoose.Schema{

    constructor(){
        super({

            usuario: {
                type: String,
                required: true
            },

            nome: {
                type: String,
                required: true
            },

            cpf: {
                type: String,
                required: true
            }

            // dataNascimento: {
            //     type: String,
            //     required: true
            // }

            // carrinho: {

            // },

            // historico: {
                
            // }

        });

        Mongoose.model('Cliente', this)

    }

}

module.exports = Cliente;