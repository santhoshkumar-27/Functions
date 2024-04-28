class Myclass {
    
    constructor(name) {
        this.name = name;
    }
    tellMyName() {
        console.log(this.name)
    }
}
const myObj = new Myclass("John");


console.log('this.tellMyName', myObj)