var birthyears = [1989,1990,1991,1992, 2000, 2001];

var now = 2017;
var adulescent = 18;

function getCurrentAge(birthyear) {
    return now - birthyear;
}

function printFullAge(years) {
    var checkAge = [];
    var ages = [];
    for(var i = 0; i < years.length; i++) {
        ages.push(getCurrentAge(years[i]));
    }

    // console.log(ages);

    for(var i = 0; i < ages.length; i++) {
        if(ages[i] > adulescent)
            checkAge.push(true);
        else
            checkAge.push(false);
    }
    return checkAge;
}

var fullage1 = printFullAge(birthyears);
console.log(fullage1);

var fullage2 = printFullAge([2012, 1915, 1999]);
console.log(fullage2);