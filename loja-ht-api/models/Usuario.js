'use strict'

const Mongoose = require('mongoose');

class Usuario extends Mongoose.Schema{

    constructor(){
        super({

            username: {
                type: String,
                required: true
            },
            senha: {
                type: Password,
                required: true
            },
            tipo: {
                type: Enum ['CLIENTE', 'ADMIN'],
                required: true
            }

        });

        //Registrando a criação do model no Mongoose
        Mongoose.model('Usuario', this);
    }
}

module.exports = Usuario