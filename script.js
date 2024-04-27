// Class syntax of es2015
var foo = function (name) {
    this.myName = name;
    this.tellMyName = function () {
        console.log(this.myName);
    }
}


var obj1 = new foo('santhoshkumar');
console.log(obj1.tellMyName())