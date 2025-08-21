const { calculateAverage, sum } = require('./average');

const numbers = [2, 4, 6, 8, 10];
const average = calculateAverage(numbers);
console.log(`A media dos numeros ${numbers} é ${average}.`);

const number1 = 3;
const number2 = 4;

const result = sum(number1, number2)

console.log(`A soma dos numeros ${number1} e ${number2} é ${result}.`);