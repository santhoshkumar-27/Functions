var foo = function (name) {
    this.myName = name;
    this.tellMyName = function () {
        console.log(this.myName);
    }
}
