//Factorial of a number

let a= +prompt("enter the number for factorial");
let fact = 1;
for(let i = 1; i<=a; i++){
    fact*= i;
}

console.log(fact);