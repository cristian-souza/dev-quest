type Customer = {
    firstName: string;
    lastName?: string;
    age: number;
}

const newCustomer: Customer = {
    firstName: 'João',
    lastName: 'Micas',
    age: 34
}

console.log(newCustomer);


function printName(first: string, last?: string) {
    console.log(`O primeiro nome é: ${first}`)
    console.log(`O ultimo nome é: ${last}`)
}

printName('Cristian')
printName('Cristian', 'Souza')