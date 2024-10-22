//Shop discount - Description on Graphic
//if the bill is <=1000 then 10% discount
//if the bill is <=5000 then 20% discount
// if the bill is > 5000 the 30% discount

let bill = +prompt("enter the bill amount");

if(bill<=1000){
    bill = bill -(bill*10/100);
}else if (bill<=5000){
    bill = bill - (bill*20/100);
}else{
    bill = bill - (bill*30/100);
}
console.log(bill);