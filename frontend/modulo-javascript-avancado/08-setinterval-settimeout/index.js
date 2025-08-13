// setTimeout(function(){
//     alert('Olá mundo')
// }, 3000)

// setTimeout(() => {
//     console.log('Console dentro do setTimeout')
// }, 4000);

// setInterval(() => {
//     console.log('Executando a cada 2 segundos')
// }, 2000);

// console.log('Console depois do setTimeout')

const idDoIntervalo = setInterval(() => {
                        console.log("Executando a cada 2 segundos");
                    }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout()