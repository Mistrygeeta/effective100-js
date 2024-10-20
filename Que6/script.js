//- Accept two numbers from user and swap their values

var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
console.log("before Swapping");
console.log(num1);
console.log(num2);
var temp ;
temp = num1;
num1 = num2;
num2 = temp;
console.log("After swapping");
console.log("num1:", num1);
console.log("num2:", num2);


//Swap without using third variable

let a = 25;
let b = 10;
console.log(`before swapping a= ${a}, b= ${b}`);

a = a+b;//35
b = a-b;//25
a = a-b;// 35-25=10
console.log(`After swapping a= ${a}, b = ${b}`);
