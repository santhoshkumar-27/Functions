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
// class Myclass {
//     static welcome() {
//         console.log("Hello World");
//     }
// }

// for older versions
function Myclasss() { }
Myclasss.welcome = function () { console.log("Hello World"); }

/**
 * Static properties are something that
 * you can access without creating an instance of the class. 
 * On the other hand, the instance will not have access to the static properties of a class.
*/
Myclasss.welcome()

const myObj1 = new Myclasss();
// static method not available for the instances only we can call with the class
try {
    myObj1.welcome();
} catch (e) {

}

class Vehicle {
    constructor(type) {
        this.vehicleType = type;
    }
    blowHorn() {
        console.log("Honk! Honk! Honk!");
    }
}
class Bus extends Vehicle {

    constructor(make) { 
        super("Bus");
        this.make = make; 
    }
    accelerator() { console.log('Accelerating Bus'); }
    brake() { console.log('Braking Bus'); }
}
Bus.prototype.noOfWheels = 6;


const myBus = new Bus("Mercedes");
console.log('myBus', myBus)