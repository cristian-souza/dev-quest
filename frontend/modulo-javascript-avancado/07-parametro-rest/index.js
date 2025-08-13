// function(a, b, ...args) {
    // ...
// }

function incentivarQuester(mensagem, ...nomesQuesters) {
    console.log(nomesQuesters)
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
    
}

incentivarQuester('Parabens por ter chego ao modulo javascript Avançado,', 'Cristian', 'João', 'Pedro')