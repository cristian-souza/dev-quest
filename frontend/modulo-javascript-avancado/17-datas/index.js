const dataAtual = new Date()

console.log(dataAtual)

const umDiaDepois = new Date(dataAtual)

umDiaDepois.setDate(dataAtual.getDate() + 1)

console.log(umDiaDepois)

const umMesAtras = new Date(dataAtual);

umMesAtras.setMonth(umMesAtras.getMonth() - 1)

console.log(umMesAtras)

const opcoes = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const dataFormatada = dataAtual.toLocaleDateString('pt-BR', opcoes)

console.log(dataFormatada)

const escolhas = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}

const formatador = new Intl.DateTimeFormat('pt-BR', escolhas)

const novaDataFormatada = formatador.format(dataAtual)

console.log(novaDataFormatada)