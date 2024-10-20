//- Accept two numbers from user and swap their values

var num1 = +prompt("Eenter first number");
var num2 = +prompt("Enter second number");
console.log("before Swapping");
console.log(num1);
console.log(num2);
var temp ;
temp = num1;
num1 = num2;
num2 = temp;
console.log("num1:", num1);
console.log("num2:", num2);