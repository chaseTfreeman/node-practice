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
var John = new Person('John', 'Doe');
console.log(John);
console.log(John.firstName);
