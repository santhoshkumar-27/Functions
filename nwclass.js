class Myclass {
    lastName = "lewis"; // property alwasy added to the instances
    tellMyNameArrow = () => { console.log(this.name) };
    constructor(name) {
        this.name = name;
    }
    tellMyName() {
        console.log(this.name)
    }
}
const myObj = new Myclass("John");


console.log('this.tellMyName', myObj)
// creating static method with new es2015 syntax
class Myclass {
    static welcome() {
        console.log("Hello World");
    }
}

/**
 * Static properties are something that
 * you can access without creating an instance of the class. 
 * On the other hand, the instance will not have access to the static properties of a class.
*/
Myclass.welcome()

const myObj1 = new Myclass();
myObj1.welcome();