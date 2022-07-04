let {MarutiShowroom} = require("./InheritanceHonda")

class MultiTask {
    
// creating class obj in another class which is already extended

    testing(){
        let obj = new MarutiShowroom("maruti","india",21)

        console.log(obj.vehicle())
    }

}

let samp = new MultiTask()

console.log(samp.testing())