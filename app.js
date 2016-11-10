// *****Basic app/module communication

// var greet = require('./greet.js')
// greet();

// *********Object Literals
// var person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   greet: function(){
//     console.log('Hello ' + this.firstName + ' ' + this.lastName);
//   }
// };
// // person.greet();
// console.log(person['firstName'])

// ******* Prototypical Inheritence

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
//
// Person.prototype.greet = function () {
//   console.log('Hello ' + this.firstName + ' ' + this.lastName);
// };
//
// var John = new Person('John', 'Doe');
// John.greet();
//
// var Jane = new Person('Jane', 'Doe');
// Jane.greet();
// console.log(John.__proto__);
// console.log(Jane.__proto__);
// console.log(John.__proto__ === Jane.__proto__);

// //****** Pass by Value example
// function change(b){
//   b = 2;
// }
//
// var a = 1;
// change(a);
// // console.log(a); a remains = 1 becuase it is a primitive value and was unphased
// // by the logic in the 'change function'(b points to the same memory address as a in this case)
//
// // ************ Pass by reference example
// function changeObject(d){
//   d.prop1 = function(){};
//   d.prop2 = {};
// }
//
// var c = {};
// c.prop1 = {};
//
// changeObject(c);
// console.log(c);
// // In this case, c is changed FROM a function object to an object literal, THEN,
//  // an additional empty object literal called prop2 is also added to the C object.

// ********IIFEs
(function(){
  var firstName = 'John';
  console.log(firstName);
}());
var firstName = 'Jane';
console.log(firstName);
