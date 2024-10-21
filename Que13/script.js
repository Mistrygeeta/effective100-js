//Accept the gender from the user as char and print the respective greeting message

let gen = prompt("enter your gender(M/F)");

if( gen=='m'){
    console.log("Good Morning Sir");
}else if(gen=='f'){
    console.log("Good Morning Mam");
}else{
    console.log("Good Morning!");
}