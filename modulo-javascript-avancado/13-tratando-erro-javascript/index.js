let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {

        if(typeof chaleiraEstaNoFogao != 'boolean') throw "Somente o tipo boleano é aceito"

        if (chaleiraEstaNoFogao && fogaoEstaLigado) {
            console.log('Passo 1 finalizado: Água foi fervida')
            resolve()
        }else{
            const mensagemErro = 'é nescessário colocar a chaleira com água no fogão senão teu cafézinho não vai ficar pronto nunca'
            reject(mensagemErro)
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


let chaleiraEstaNoFogao = 1
let fogaoEstaLigado = true

async function inciciarProcessoDeFazerCafé() {
    try{
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado)
        const cafePassado = await passarCafe(aguaFervida)
        const cafeTomado = await tomarCafe(cafePassado)
        const xicaraLavada = await lavarXicara(cafeTomado)

    }catch(error){
        console.log(error)
    }finally{
        console.log('Finalizado ritual do café, bora trabalhar')
    }
}

inciciarProcessoDeFazerCafé()