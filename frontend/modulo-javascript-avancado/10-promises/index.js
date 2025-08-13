/*
    Pendente
    Realizada resolve
    Recusada  reject
    Estabelecida
*/

// new Promise((resolve, reject) => {

// })

let ferverAgua = (chaleiraEstaNoFogao,fogaoEstaLigado ) => {
    return new Promise((resolve, reject) => {
        if(chaleiraEstaNoFogao && fogaoEstaLigado){
            console.log('começando o processo de ferver água')
            resolve()
        }else{
            console.log('é nescessário ligar o fogão e colocar a chaleira no fogão para ferver a água')
            reject() 
        }
    })
}

let chaleiraEstaNoFogao= true
let fogaoEstaLigado = false

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
console.log('fazendo café')