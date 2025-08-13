let pessoas = [
    {nome: 'Cristian', idade: 34},
    {nome: 'Celiane', idade: 34},
    {nome: 'Elizabeth', idade: 10},
    {nome: 'Benjamim', idade: 8}
]

// let nomeDasPessoas = []
// for (let i = 0; i < pessoas.length; i++) {
//     nomeDasPessoas.push(pessoas[i].nome)
// }

// let nomeDasPessoas = pessoas.map(function(pessoa){
//     return pessoa.nome + " tem " + pessoa.idade + " anos"
// })

let nomeDasPessoas = pessoas.map(pessoa => pessoa.nome + " tem " + pessoa.idade + " anos")

console.log(nomeDasPessoas)