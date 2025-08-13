function claculadoraFatotial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++){
        resultado *= i;
    }

    return resultado
}

function imprimirFatorial(numero) {
    const ehUmNumeroNegativo = numero < 0;

    if(ehUmNumeroNegativo){
        console.log("Não é possivel calcular um fatorial de um numéro negativo!");
    } else {
        const fatorial = claculadoraFatotial(numero);
        console.log(`O fatorial de ${numero} é ${fatorial}`);
    }
}

const numero = 5;
imprimirFatorial(numero);
