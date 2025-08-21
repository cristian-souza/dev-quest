type Customer = {
    name: string;
    age: number;
}

function showCustomerInfo(customer: Customer) {
    console.log(`O nome do cliente é: ${customer.name}`)
    console.log(`A idade do Cliente é: ${customer.age}`)
}

