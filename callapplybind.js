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