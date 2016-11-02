// var greet = require('./greet.js')
// greet();

// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greet: function(){
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
//   }
// };
// // person.greet();
// console.log(person['firstName'])

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greet = function () {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
};

var John = new Person('John', 'Doe');
John.greet();

var Jane = new Person('Jane', 'Doe');
Jane.greet();
console.log(John.__proto__);
console.log(Jane.__proto__);
console.log(John.__proto__ === Jane.__proto__);
