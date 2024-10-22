//Accept a year and check if it a leap year or not 
//leap year- A leap year is a year which has 366 days.
let year = +prompt("enter the year");

if((year %4 == 0 && year % 100 !==0) || year%400 == 0){
    console.log(`${year} is a leap year`);
}else{
    console.log(`${year} is not a leap year`);
}