var test = {
    name: 'test1',
    yearofBirth: '1990',
    job: 'service'
};

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function() {
    console.log(2017 - this.yearOfBirth);
};

Person.prototype.lastname = 'pal';

var test = new Person('test', 1990, 'service');
var test1 = new Person('test1', 1980, 'layman');
var test2 = new Person('test', 1970, 'teacher');

test.calculateAge();
test1.calculateAge();
test2.calculateAge();

console.log(test.name + ' ' + test.lastname);
console.log(test1.name + ' ' + test1.lastname);
console.log(test2.name + ' ' + test2.lastname);

var personProto = {
    calculateAge: function() {
        console.log(2017 - this.yearOfBirth);
    }
}

var test4 = Object.create(personProto);
test4.name = 'test4';
test4.yearOfBirth = 1960;
test4.job = 'gov';

var test5 = Object.create(personProto, 
{
    name: {value: 'test5'},
    yearOfBirth: {value: 1950},
    job: {value: 'worker'}
});
