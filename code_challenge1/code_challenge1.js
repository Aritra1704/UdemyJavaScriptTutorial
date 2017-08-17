var ageJon = 20;
var heightJon = 180;

var ageJack = 25;
var heightJack = 170;

var ageJill = 65;
var heightJill = 160;

if((ageJon * heightJon) > (ageJack * heightJack) && 
    (ageJon * heightJon) > (ageJill * heightJill)){
    console.log("Jon wins");
} else if((ageJill * heightJill) > (ageJack * heightJack) && 
    (ageJill * heightJill)  > (ageJon * heightJon)) {
    console.log("Jill wins");
} else
    console.log("Jack wins");