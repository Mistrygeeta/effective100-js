//Accept three numbers and print the greatest among them

let a =+prompt("enter first number");
let b = +prompt("enter second number");
let c = +prompt("enter third number");
//compare all three num using if else

if(a>b && a>c){
    console.log(`a = ${a} is greatest number`);
}else if (b>c && b>a){
    console.log(`b = ${b} is a greatest number`);
}else if (c>a && c>b){
    console.log(`c = ${c} is a greatest number`);
}else{
    console.log("equal");
}