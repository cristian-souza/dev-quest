// Função genérica que aceita um argumento do tipo T 
// e retorna um array de valores do mesmo tipo T
function makeArray(item) {
    return [item];
}
// Uso da função com tipo number
var numbers = makeArray(10);
console.log(numbers); // Output: [10]
//numbers.filter(n => n % 2)
var names = makeArray('Cristian');
console.log(names);
