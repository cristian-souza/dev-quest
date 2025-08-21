'use strict'
//console.log(this)
// console.log(window)
// console.log(window === this)

// this.name = 'Cristian'
// function saudar(){
//     console.log('this no contexto da função ', this)
//     console.log('Olá, ' + this.name)
// }

// saudar()

// let usuario = {
//     nome: 'Cristian',
//     saudar: function () {
//         console.log('this no contexto do metodo', this)
//         console.log('this.nome no contexto do metodo', this.nome)
//     }
// }

// usuario.saudar()

let comida = {
    nome: 'Brocolis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozimento) {
    console.log('this no contexto do objeto comida', this)
    this.temperatura = temperaturaDeCozimento;
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)