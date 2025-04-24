let ordens = [
    {cliente: 'Cristian', tipo: 'compra', quantidade: 56, ativo: 'NFLX34'},
    {cliente: 'Celiane', tipo: 'compra', quantidade: 76, ativo: 'AAPL34'},
    {cliente: 'Elizabeth', tipo: 'vemda', quantidade: 21, ativo: 'GOGLE34'},
    {cliente: 'Benjamim', tipo: 'venda', quantidade: 34, ativo: "MXR11"}
]

// let quantidadesDeOrdens = 0
// for (let i = 0; i < ordens.length; i++){
//     quantidadesDeOrdens += ordens[i].quantidade
// }

// console.log(quantidadesDeOrdens)

// let quantidadesDeOrdens = ordens.reduce(function(somasOrdens, orden){
//     return somasOrdens + orden.quantidade
// }, 0)

let quantidadesDeOrdens = ordens.reduce((somasOrdens, orden) =>somasOrdens + orden.quantidade, 0)

console.log(quantidadesDeOrdens)