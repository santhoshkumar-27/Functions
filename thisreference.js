// https://www.freecodecamp.org/news/what-is-this-in-javascript/

// Default Binding in JavaScript
// standlalone functions
function alert() {
    console.log(this.age + ' years old');
}

// const name = 'Kingsley';
// alert(); // Kingsley is calling


// Implicit Binding in JavaScript
const person = {
    age: 22,
    alert: alert
}

person.alert() // 22 years old

const myObj = {
    age: 22,
    alert: alert,
    nestedObj: {
        age: 26,
        alert: alert
    }
}

myObj.alert(); // `this` is bound to `myObj` -- 22 years old
myObj.nestedObj.alert(); // `this` is bound to `nestedObj` -- 26 years ol

// Explicit binding in JavaScript

const myObj2 = {
    age: 29
}

alert.call(myObj2);

// Hard Binding

const bar = function () {
    alert.call(myObj);
};


bar(); // 22
setTimeout(bar, 100); // 22 
// a hard-bound `bar` can no longer have its `this` context overridden 
bar.call(window);

// Constructor Call Binding
function giveAge(age) {
    this.age = age;
}

const bar1 = new giveAge(22);
console.log(bar1.age); // 22