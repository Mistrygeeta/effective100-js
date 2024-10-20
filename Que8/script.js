// Accept the parameters and calculate the Compound Interest & print it on STDOUT (Use Math class methods)
let p = +prompt("enter the principal");
let r =+prompt("enter the rate");
let t = +prompt("enter the time");
let amount = p*Math.pow((1+r/100),t);
console.log(amount.toFixed(2));
let ci = amount-p;
console.log(`compund interest is ${ci}`);