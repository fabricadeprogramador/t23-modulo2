class Calculadora{

    somar(n1, n2){
        return n1 + n2
    }

    subtrair(n1, n2){
        return n1 - n2
    }

    multiplicar(n1, n2){
        return n1 * n2
    }

    dividir(n1, n2){
        return n1 / n2
    }
}

module.exports = Calculadora

// let calculadora = new Calculadora()

// console.log("A soma é: " + calculadora.somar(2, 2))
// console.log("A subtração é: " + calculadora.subtrair(5, 3))
// console.log("A multiplicação é: " + calculadora.multiplicar(2, 5))
// console.log("A divisão é: " + calculadora.dividir(10, 2))