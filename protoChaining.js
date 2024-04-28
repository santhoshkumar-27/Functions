function Vehicle(vehicleType) {
    //Vehicle Constructor    
    this.vehicleType = vehicleType;
}

Vehicle.prototype.horn = function () {
    console.log('honk honk honk')
}