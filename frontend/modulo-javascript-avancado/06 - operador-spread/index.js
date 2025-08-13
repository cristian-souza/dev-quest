const pessoas = ['Roberto', 'Ricardo', 'Raphael']
console.log(...pessoas)

/* CONECTAR DOIS ARRAYS */

// let pessoas1 = ['ROberto', 'Ricardo', 'Raphael']
// let pessoas2 = ['Pedro', 'João', 'Paulo']

// // pessoas1 = pessoas1.concat(pessoas2)

// pessoas1 = [...pessoas1, ...pessoas2]
// console.log(pessoas1)

/* CLONAR OBJETO */

const pessoa1 = {nome: 'Roberto', idade: 32}

const objetoClonado = { ...pessoa1 }
console.log(objetoClonado)
console.log(pessoa1)
