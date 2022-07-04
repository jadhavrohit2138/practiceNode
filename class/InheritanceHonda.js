let {Maruti} = require("./InheritanceMaruti")

// subclsas
class MarutiShowroom extends Maruti {
    constructor(name, sname,id) {
        super(name,sname)     // super class is used to call the constructor of super calss
        this.id = id;
    }
    
    vehicle() {
        // console.log(super.color())
        // console.log(super.color())
        console.log("this is " + this.name + " car of " + this.sname+" id is: "+this.id)
        let color = this.color()
        console.log("the color is " + color)
    }

}
 

module.exports ={
    MarutiShowroom
}