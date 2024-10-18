/*
|   == ---- igual ---- a==b verdadeiro ser a for igual b 
|   != ---- diferente ---- a!=b verdadeiro ser a for diferente b 
|   === ---- identico ---- a===b verdadeiro ser a for identico b 
|   !== ---- não identico ---- a!==b verdadeiro ser a não for identico b 
|   < ---- menor quer ---- a < b ---- verdadeiro quando a for menor que b
|   <= ---- menor igual que ---- a <= b ---- verdadeiro quando a for menor igual que b
|   > ---- maior quer ---- a > b ---- verdadeiro quando a for maior que b
|   > ---- maior igual quer ---- a >= b ---- verdadeiro quando a for maior igual que b
*/

// const a = 8
// const b = 8

// console.log(a >= b)

const a = 2
const b = 2

console.log(a === b && a <= b)
// V e V = V

console.log(a === b && a < b)
// V e F = F

console.log(a > b && a ===b)
// F e V = F

console.log(a > b  && a < b)
// F e F = F

/*
OR
*/

console.log(a === b || a <= b)
// V e V = V

console.log(a === b || a < b)
// V e F = v

console.log(a > b || a ===b)
// F e V = V

console.log(a > b  || a < b)
// F e F = F

/*
NOT
*/

console.log(!(a === b)) //false

console.log(!(a < b)) //true