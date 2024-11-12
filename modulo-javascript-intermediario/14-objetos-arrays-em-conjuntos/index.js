// let videoGame = {
//     nome: 'Xbox',
//     valor: 3000,
//     jogos: [{nome: 'Final fantasy'},
//         {nome: 'Fallout'}]
// }

// videoGame.jogos.push({nome: 'Fifa'})

// console.log(videoGame)

let cliente = {
    nome: 'Cristian',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'Fifa'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0])