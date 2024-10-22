//- Accept name and age from the user. Check if the user is a valid voter or not.
//Vaid - Hello Shery, You are a valid voter.
//Invalid - Sorry Shery, you can't cast the vote

let name = prompt("enter your name");
let age = +prompt("enter your age");
if(age>=18){
    console.log(`Hello ${name}, you are valid voter`);
}else{
    console.log(`Sorry ${name}, you can't cast the vote`);
}

//- Print after how many years the user will be eligible
let n = prompt("enter your name");
let a = +prompt("enter your age");
if(a>=18){
    console.log(`Hello ${n}, you are valid voter`);
}else{
    console.log(`Sorry ${n}, you are not eligible for vote ${18-a} more years `);
}