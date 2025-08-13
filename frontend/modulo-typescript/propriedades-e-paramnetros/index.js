var newCustomer = {
    firstName: 'João',
    age: 34
};
console.log(newCustomer);
function printName(first, last) {
    console.log("O primeiro nome \u00E9: ".concat(first));
    console.log("O ultimo nome \u00E9: ".concat(last));
}
printName('Cristian');
printName('Cristian', 'Souza');
