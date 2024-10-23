//- Bijli Bill - Description on Graphic
//1 to 100 = Rs 10 unit
//100 to 200 = Rs 15 unit
//200 to 300 = Rs 20 unit
// >300 =  Rs 25 unit

let unit = +prompt("enter the unit");
let amount = 0
if (unit<=100){
    amount = unit*10;
}else if(unit>100 && unit<=200){
    amount = unit*15;
}else if(unit>200 && unit<=300){
    amount = unit*20;
}else{
    amount = unit*25;
}

console.log(amount);