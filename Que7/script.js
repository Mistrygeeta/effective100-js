//Accept the length and width of a rectangle. Calculate & print the area and perimiter.

let l= +prompt("enter the length ");
let w= +prompt("enter the width");
let area=l*w;
console.log(`area of the rectangle is ${area}`);

let perimeter = 2*(l+w);
console.log(`parimeter of the rectangle is ${perimeter}`);