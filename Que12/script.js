//Accept two numbers and print the greatest between them

let num1 = +prompt("enter first number");
let num2 = +prompt("enter second number");
console.log(num1, num2);
if(num1>num2){
    console.log(`num1=${num1} is greater than ${num2}`);
} else{
    console.log(`num2=${num2}is greater than ${num1}`);
}