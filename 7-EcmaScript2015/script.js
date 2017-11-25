/*
//ES5
var name5 = 'Aritra Pal';
var age5 = 28;
name5 = 'Aritra R Pal';
console.log(name5);

//ES6
const name6 = 'Aritra Pal';
let age6 = 28;
name6 = 'Aritra R Pal';
console.log(name6);*/

//ES5
// function driverLicense5(passedTest) {
//     if(passedTest) {
//         // console.log(firstname);
//         var firstname = 'Aritra';
//         var yearOfBirth = 1989;

//     }
//     console.log(firstname + ' born in: ' + yearOfBirth + ' can drive cars');
// }
// driverLicense5(true);

// //ES6
// function driverLicense6(passedTest) {
//     if(passedTest) {
//         console.log(firstname);
//         let firstname = 'Aritra';
//         const yearOfBirth = 1989;

//     }
//     console.log(firstname + ' born in: ' + yearOfBirth + ' can drive cars');
// }
// driverLicense6(true);

// let firstName = 'Aritra';
// let lastName = 'Pal';
// const yearOfBirth = 1989;

// function calcAge(year) {
//     return 2017 - year;
// }

// //ES5
// console.log('This is ' + firstName + ' ' + lastName + " he was born in " + yearOfBirth + '. Today his age is ' + calcAge(yearOfBirth));

// //ES6
// console.log(`This is ${firstName} ${lastName}. He was born on ${yearOfBirth}. His current age is ${calcAge(yearOfBirth)}.`);

// const n = `${firstName} ${lastName}`;
// console.log(n.startsWith('A'));
// console.log(n.endsWith('l'));
// console.log(n.includes('tra'));
// // console.log(firstName.repeat(3));
// console.log(`${firstName} `.repeat(3));


// const years = [1990, 1991, 1992, 1993];

// //ES5
// var ages5 = years.map(function(el) {
//     return 2017 - el;
// });

// console.log(ages5);

// //ES6
// let ages6 = years.map(el => 2017 - el);
// console.log(ages6);

// ages6 = years.map((el, index) => `Age element ${index + 1}: ${2017 - el}`);
// console.log(ages6);

// ages6 = years.map((el, index) => {
//     const now = new Date().getFullYear();
//     const date = now - el;
//     return `Age element ${index + 1}: ${date}`;
// });
// console.log(ages6);

/******************************************/

//ES5
// var box5 = {
//     color: 'green',
//     position: 1,
//     clickme: function() {
//         var self = this;
//         document.querySelector('.green').addEventListener('click', function() {
//             var str = 'This is box number ' + self.position + ' and it is' + self.color;
//             alert(str);
//         })
//     }
// }
// box5.clickme();

//ES6
// const box6 = {
//     color: 'green',
//     position: 1,
//     clickme: function() {
        
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is' + this.color;
//             alert(str);
//         })
//     }
// }
// box6.clickme();

//ES6 DON'T DO LIKE THIS
// const box61 = {
//     color: 'green',
//     position: 1,
//     clickme: () => {
        
//         document.querySelector('.green').addEventListener('click', () => {
//             var str = 'This is box number ' + this.position + ' and it is' + this.color;
//             alert(str);
//         })
//     }
// }
// box61.clickme();




function Person(name) {
    this.name = name;
}

// //ES5 
// Person.prototype.myfriends5 = function(friends) {
//     var arr = friends.map(function(el) {
//         return this.name + ' is friends with ' + el;
//     }.bind(this));

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'John'];
// new Person('Aritra').myfriends5(friends);

//ES6
// Person.prototype.myfriends6 = function(friends) {
//     var arr = friends.map((el) =>  `${this.name} +  is friends with  + ${el}`);

//     console.log(arr);
// }

// var friends = ['Bob', 'Jane', 'John'];
// new Person('Aritra').myfriends6(friends);



//LECTURE DESTRUCTURING

//ES5
// var nameArr = ['Aritra', 28];
// var name = nameArr[0];
// var age = nameArr[1];


// //ES6
// const [nameconst, ageconst] = ['Aritra', 28];
// console.log(`name ${nameconst} , Age ${ageconst}`);

// const obj = {
//     firstName: 'Aritra', 
//     lastName: 'Pal'
// };

// const {firstName, lastName} = obj;
// console.log(`name: ${firstName} ${lastName}`);

// const {firstName: a, lastName: b} = obj;
// console.log(`name: ${a} ${b}`);



// function calcAgeRetirement(year) {
//     const age = new
//     Date().getFullYear() - year;
//     return [age, 65 - age];
// }

// const [age2, retirement] = calcAgeRetirement(1989);
// console.log(`Age: ${age2}, ${retirement})`);


//LECTURE ARRAYS

// const boxes = document.querySelectorAll('.box');

//ES5
// var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(element) {
//     element.style.backgroundColor = 'dodgerBlue';
// }, this);
    
// for(var i = 0; i < boxesArr5.length; i++) {
//     if(boxesArr5[i].className === 'box blue')
//         continue;
//     // else
//         boxesArr5[i].textContent = 'I changed to blue.';
// }


//ES6
// const boxArr6 = Array.from(boxes);
// boxArr6.forEach(cur => cur.style.backgroundColor = 'dodgerBlue'); 
// for(const cur of boxArr6) {
//     // if(cur.className === 'box blue')
//     if(cur.className.includes('blue'))
//         continue;
//     cur.textContent = 'I changed to blue.';
// }


//ES5
// var ages = [12, 13, 14, 15, 16, 17];
// var full = ages.map(function(cur) {
//     return cur >= 14;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);



//ES6
// console.log(ages.findIndex(cur => cur >= 14));
// console.log(ages.find(cur => cur >= 14));



//LECTURE SPREAD OPERATOR
// function addforages(a, b, c, d) {
//     return a + b + c + d;
// }

// var sum = addforages(18, 38, 12, 21);
// console.log(sum);

// //ES5
// var ages = [18, 38, 12, 21];
// var sum2 = addforages.apply(null, ages);
// console.log(sum2);


// //ES6
// const max3 = addforages(...ages);
// console.log(max3);

// const family1 = ['guy1', 'guy2', 'guy3'];
// const family2 = ['lady1', 'lady2', 'lady3'];
// const bigfamily = [...family1, 'Lily', ...family2];
// console.log(bigfamily);

// const h = document.querySelector('h1');
// const boxes = document.querySelectorAll('.box');
// const all = [h, ...boxes];
// Array.from(all).forEach(cur => cur.style.color = 'purple');



//LECTURE REST PARAMETERS
/*
//ES5
function isfullage5() {
    // console.log(arguments);
    var argsStr = Array.prototype.slice.call(arguments);
    argsStr.forEach(function(cur){
       console.log((2017 - cur) >= 18); 
    });
}

isfullage5(1989, 2007, 1990, 2013, 1991, 2002);

//ES6
function isFullAge6(...years) {
    // console.log(years);

    years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1989, 2007, 1990, 2013, 1991, 2002);
*/


//ES5
// function isfullage5(limit) {
//     console.log(arguments);
//     var argsStr = Array.prototype.slice.call(arguments, 1);
//     argsStr.forEach(function(cur){
//        console.log((2017 - cur) >= limit); 
//     });
// }

// isfullage5(21, 1989, 2007, 1990, 2013, 1991, 2002);

//ES6
// function isFullAge6(limit, ...years) {
//     // console.log(years);

//     years.forEach(cur => console.log((2016 - cur) >= limit));
// }
// isFullAge6(14, 1989, 2007, 1990, 2013, 1991, 2002);


//LECTURE DEFAULT PARAMETERS

/*
//ES5
function PalPerson(firstName, yearofBirth, lastname, nationality) {

    lastname === undefined ? lastname = 'Pal' : lastname;
    nationality === undefined ? nationality = 'India' : nationality;

    this.firstName = firstName;
    this.lastname = lastname;
    this.yearofBirth = yearofBirth;
    this.nationality = nationality;
}
*/

//ES6
// function PalPerson(firstName, yearofBirth, lastname = 'Pal', nationality = 'India') {
    
//         this.firstName = firstName;
//         this.lastname = lastname;
//         this.yearofBirth = yearofBirth;
//         this.nationality = nationality;
// }

// var aritra = new PalPerson('Aritra', 1989);
// console.log(aritra);
// var randomguy = new PalPerson('Guy', 1980, 'Rand', 'anywhere');
// console.log(randomguy);



//LECTURE MAPS

// const question = new Map();
// question.set('Question', 'What is the latest JS version?');
// question.set(1, 'ES5');
// question.set(2, 'ES6');
// question.set(3, 'ES2015');
// question.set(4, 'ES7');
// question.set('answer', 3);
// question.set('true', 'Correct answer');
// question.set('false', 'Wrong answer');

// console.log(question.get('Question'));
// console.log(question.size);

// if(question.has(4)) {
//     // question.delete(4);
//     console.log('Answer 4');
// }

// question.clear();

// question.forEach((value, key) => console.log(`This is key: ${key} and this is value ${value}.`));

// for(let [key, value] of question.entries()) {
//     // console.log(`This is key: ${key} and this is value ${value}.`);
//     if(typeof(key) === 'number') {
//         console.log(`Answer key ${key} value is ${value}`);
//     }
// }

// const ans = parseInt(prompt(`Write correct ans`));
// const isCorrect = ans === question.get('answer');
// console.log(isCorrect);
// console.log(question.get(ans === question.get('answer')));
// console.log(question.get(isCorrect.toString()));



// //LECTURE CLASSES

// //ES5
// var Person5 = function(name, yearofbirth, job) {
//     this.name = name;
//     this.yearofBirth = yearofbirth;
//     this.job = job;
// }

// Person5.prototype.calculateAge = function() {
//     var age = new Date().getFullYear() - this.yearofBirth;
//     console.log(age);
// }

// var aritra5 = new Person5('aritra', 1989, 'developer');


// //ES6
// class Person6 {
//     constructor (name, yearofBirth, job) {
//         this.name = name;
//         this.yearofBirth = yearofBirth;
//         this.job = job;
//     }

//     calculateAge () {
//         var age = new Date().getFullYear() - this.yearofBirth;
//         console.log(age);
//     }

//     static greeting() {
//         console.log('Hey there');
//     }
// }

// const aritra6 = new Person6('Aritra', 1989, 'developer');
// Person6.greeting();



//LECTURE CLASSES and SUBCLASSES

//ES5
var Person5 = function(name, yearofbirth, job) {
    this.name = name;
    this.yearofBirth = yearofbirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearofBirth;
    console.log(age);
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var aritra5 = new Athelete5('aritra', 1989, 'developer', 3, 10);
aritra5.calculateAge();
aritra5.wonMedal();


//ES6
class Person6 {
    constructor (name, yearofBirth, job) {
        this.name = name;
        this.yearofBirth = yearofBirth;
        this.job = job;
    }

    calculateAge () {
        var age = new Date().getFullYear() - this.yearofBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {
    constructor(name, yearofBirth, job, olympicGames, medals) {
        super(name, yearofBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }

    wonmedals() {
        this.medals++;
        console.log(this.medals);
    }
}

const athelete6 = new Athelete6('Aritra', 1989, 'developer', 3, 10);
athelete6.calculateAge();
athelete6.wonmedals();

