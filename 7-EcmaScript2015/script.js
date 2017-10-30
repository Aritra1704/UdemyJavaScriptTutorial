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
Person.prototype.myfriends6 = function(friends) {
    var arr = friends.map((el) =>  `${this.name} +  is friends with  + ${el}`);

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'John'];
new Person('Aritra').myfriends6(friends);