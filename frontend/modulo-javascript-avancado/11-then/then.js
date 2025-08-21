let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            console.log('é nescessário colocar a chaleira com água no fogão senão teu cafézinho não vai ficar pronto nunca')
            reject()
        }
    })
}

let passarCafe = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 2 finalizado: Café foi passado')
        resolve(true)
    })
}
let tomarCafe = (cafePassado) => {
    return new Promise((resolve) => {
        console.log('Passo 3 finalizado: Terminei de tomar o café')
        resolve(true)
    })
}
let lavarXicara = (aguaFervida) => {
    return new Promise((resolve) => {
        console.log('Passo 4 finalizado: Terminei de lavar a xicara')
        resolve(true)
    })
}


let chaleiraEstaNoFogao = true
let fogaoEstaLigado = true

ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
    .then(() => {
        return passarCafe();
    })
    .then(() => {
        return tomarCafe();
    })
    .then(() => {
        return lavarXicara();
    })
    .then(() => {
        console.log('Finalizado ritual do café, bora trabalhar')
    })