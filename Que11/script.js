//Find circumference and area of circle
let r = +prompt("enter the radius of circle");
// a= pi*r*r
let area = Math.PI*r*r;
//c = 2*pi*r
let circumference = 2*Math.PI*r;
console.log(`area of circle is ${area.toFixed(3)}`);
console.log(`circumference of circle is ${circumference.toFixed(3)}`);