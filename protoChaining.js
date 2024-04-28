function Vehicle(vehicleType) {
    //Vehicle Constructor    
    this.vehicleType = vehicleType;
}

Vehicle.prototype.horn = function () {
    console.log('honk honk honk')
}

function Bus(make) {
    // Bus Constructor  
    // inheritance of Vehicle
    Vehicle.call(this, "Bus");
    this.make = make
}

console.log('Object.create(Vehicle.prototype)', Object.create(Vehicle.prototype))
/**
 *  Object.create(Vehicle.prototype) will create an empty object whose prototype is Vehicle.prototype. 
 *  We set this object as a prototype of Bus. For Vehicle.prototype we haven’t specified any prototype 
 *  so by default it inherits from Object.prototype.
 */
// Object.create method create prototype to the object from the mention object
Bus.prototype = Object.create(Vehicle.prototype)

Bus.prototype.noOfWheels = 6; // Let's assume all buses have 6 wheels

Bus.prototype.accelerator = function () {
    console.log('Accelerating Bus');
    //Bus accelerator
}

Bus.prototype.brake = function () {
    console.log('Braking Bus');
    // Bus brake
}

var myBus = new Bus('Mercedes')

console.dir(myBus)

var obj = Object.create(null)
console.dir(obj)
