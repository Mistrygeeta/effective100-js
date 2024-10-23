//Accept an english alphabet from user and check if it is a consonent or a vowel;

let char = prompt("enter the alphabet");

if((char=='a' || char=='e' || char=='i' || char=='o' || char=='u') || (char=='A' || char=='E' || char=='I' || char=='O' || char=='U')){
    console.log(`the char ${char} is a vowel`);
}else{
    console.log(` ${char} is  a constant`);
}