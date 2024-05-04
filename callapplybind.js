// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/#prerequisites
// call type functions
function Car(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand(brand, price) {
    Car.call(this, "convertible", "petrol");
    this.brand = brand;
    this.price = price;
    console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1', 100000);


console.log('newBrand', newBrand)

// How to call a function with no arguments in JS
const newEntity = (obj) => console.log(obj);

function mountEntity() {
    // this.entity = newEntity;
    console.log(`Entity  is mounted on ${this}`);
}

mountEntity.call();

// In apply methods is that we can use arguments as array

// apply methods
function Car1(type, fuelType) {
    this.type = type;
    this.fuelType = fuelType;
}

function setBrand1(brand, price) {
    Car.apply(this, ["convertible", "petrol"]);
    this.brand = brand;
    this.price = price;
    console.log(`Car details = `, this);
}

const newBrand1 = new setBrand1('Brand1', 100000);


console.log('newBrand1', newBrand)


function addUp() {
    console.log('arguments',arguments)
    //Using arguments to capture the arbitrary number of inputs
    const args = Array.from(arguments);
    this.x = args.reduce((prev, curr) => prev + curr, 0);
    console.log("this.x = ", this.x);
}

function driverFunc() {
    const obj = {
        inps: [1, 2, 3, 4, 5, 6]
    }
    addUp.apply(obj, obj.inps);
}

driverFunc();