function colocarAguaPraFerver() {
    console.log('colocar água pra ferver')

    setTimeout(() => {
        console.log('agua ferveu')
        passarCafe()
    }, 5000)
}

function prepararPraPassarCafé() {
    console.log('pegar o pô de café')
    console.log('pegar o filtro de café')
    console.log('colocar o café no filtro')
    console.log('colocar o filtro em cima da xicara')
}

function passarCafe() {
    console.log('passando o café')
}

colocarAguaPraFerver()
prepararPraPassarCafé()