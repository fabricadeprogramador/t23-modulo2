var Calculadora = require('./Calculadora')
const readLine = require('readline')

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

class CalculadoraInterface{

    constructor(){
        this.calc = new Calculadora()
    }
   
    fazerSoma(){
        rl.question('Digite um número: ', (n1) =>{
            var num1 = parseInt(n1)

            rl.question('Digite outro número: ', (n2) => {
                var num2 = parseInt(n2)
                console.log("A soma é: " + this.calc.somar(num1, num2))
                // rl.close()
            })
        })
    }

    fazerSubtracao(){
        rl.question('Digite um número: ', (n1) =>{
            var num1 = parseInt(n1)

            rl.question('Digite outro número: ', (n2) => {
                var num2 = parseInt(n2)
                console.log("A subtracao é: " + this.calc.subtrair(num1, num2))
                rl.close()
            })
        })
    }
}

let calculadoraInterface = new CalculadoraInterface()

calculadoraInterface.fazerSoma()
calculadoraInterface.fazerSubtracao()
