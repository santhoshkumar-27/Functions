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