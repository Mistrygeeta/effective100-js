//Extend the previous program and handle the wrong inputs.
//Print Good Morning sir for input m or M & Good morning Maam for input F or f 
//      else print Wrong Input

let gen = prompt("enter your gender(M/F)");

if( gen=='m'|| gen== 'M'){
    console.log("Good Morning Sir");
}else if(gen=='f'|| gen== 'F'){
    console.log("Good Morning Mam");
}else{
    console.log("Wrong Input");
}
