var decorate = require('getter-setter').browser


class Encaps {
    constructor(value){
        this.value=value
    }
  
    #balance = 100 // declaring variable to private

    obj1 = decorate({
        key:this.#balance
    });
     
    get(){
        return  this.obj1.get("key")

    }
    set(){
        return this.obj1.set("key",this.value)
    }
//     getAmount() {
//         return this.#balance    // get private variable outside the class
//     }
//     setAmount(amnt) {
//         this.#balance = amnt    // set private variable outside the class
//     }
}

let obj = new Encaps(300)
console.log(obj.get())
console.log(obj.set())
console.log(obj.get())
// obj.setAmount(300)
// console.log(obj.getAmount())
// console.log(obj.#balance) // we cant access balance because its a private identifierobj