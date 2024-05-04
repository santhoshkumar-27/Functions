// https://www.freecodecamp.org/news/understand-call-apply-and-bind-in-javascript-with-examples/#prerequisites

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

function mountEntity(){
	// this.entity = newEntity;
	console.log(`Entity  is mounted on ${this}`);
}

mountEntity.call();