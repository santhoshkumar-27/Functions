// https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/

// Class syntax of es2015
// var foo = function (name) {
//     this.myName = name;
//     this.tellMyName = function () {
//         console.log(this.myName);
//     }
// }
// since we create a instance of the object the tellMyName also taking memory space for each creations
// so in order reduce to that
var foo = function(name) { this.myName = name;}

foo.prototype.tellMyName = function() {   console.log(this.myName);}

var obj1 = new foo('santhoshkumar');
console.log(obj1.tellMyName())
var obj2 = new foo('sandy');
console.log(obj2.tellMyName())


