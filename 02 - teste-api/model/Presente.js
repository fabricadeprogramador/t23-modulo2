'use strict'

const Mongoose = require('mongoose')


class Presente extends Mongoose.Schema{

    constructor(){
        super({

            convidado: {
                type: String,
                required: true
            },

            valor: {
                type: Number
            },

            descricao: {
                type: String,
                required: true
            },

            data: {
                type: String
            }

        })
        Mongoose.model('Presente', this)

    }

}
module.exports = Presente