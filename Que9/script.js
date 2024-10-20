//Accept the three sides of triangle and calculate the area using herons formula
let a = 11;
let b= 12;
let c = 13;
let s = (a+b+c)/2;
let area = Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area.toFixed(2));