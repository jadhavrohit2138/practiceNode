let {Car} = require("./InheritanceCreate")

// subclsas
class Maruti extends Car {
    constructor(name, sname) {
        super(name)     // super class is used to call the constructor of super calss
        this.sname = sname;
    }
    
    vehicle() {
        console.log(super.color())
        console.log("this is " + this.name + " car of " + this.sname)
        let color = this.color()
        console.log("the color is " + color)
    }

}

module.exports ={
    Maruti
}