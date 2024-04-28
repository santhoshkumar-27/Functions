class Myclass {
    lastName = "lewis"; // property alwasy added to the instances
    constructor(name) {
        this.name = name;
    }
    tellMyName() {
        console.log(this.name)
    }
}
const myObj = new Myclass("John");


console.log('this.tellMyName', myObj)