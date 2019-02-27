'user strict'

const Moongose = require('mongoose');


class Produto extends Moongose.Schema {
    
    constructor(){
        super({
            descricao: {
                type: String,
                required: true
            },
            valor: {
                type: Number,
                required: true
            },
            qtdeDisponivel: {
                type: Number,
                required: true
            },
            marca: {
                type: String,
                require: true
            },
            departamento:[{
                type: moongose.Schema.Types.ObjectId,
                ref: 'Departamento'
            }]        
        });

        Moongose.model('Convidado', this);
    }
}
new Produto();

module.exports = Produto;
