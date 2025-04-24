let pessoas = [
    {nome: 'Cristian', idade: 34},
    {nome: 'Celiane', idade: 34},
    {nome: 'Elizabeth', idade: 10},
    {nome: 'Benjamim', idade: 8}
]

// let pessoasComIdadeDe34Anos = []
// for(let i = 0; i < pessoas.length; i++){
//     if(pessoas[i].idade === 34){
//         pessoasComIdadeDe34Anos.push(pessoas[i])
//     }
// }

// console.log(pessoasComIdadeDe34Anos)


let pessoasComIdadeDe34Anos = pessoas.filter((pessoa) => pessoa.idade === 34)

console.log(pessoasComIdadeDe34Anos)