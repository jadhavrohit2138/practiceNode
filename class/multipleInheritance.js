let {Mixin} = require('ts-mixer')

class P1{
    constructor(name){
        this.name = name
    }
    a = 100
    fun01(){
        console.log("my name is "+this.name)
    }
}
class P2{
    constructor(sname){
        this.sname = sname
    }
    fun01(){
        console.log("my sname is "+this.sname)
    }
}
class C2 extends Mixin(P2,P1){     
}


let obj = new C2("Rohit")
obj.fun01()


// obj.fun01()
// C2.prototype.P1 = new P1("rohit")
// obj.P1.fun01()
// // console.log(obj.P1.a)
// console.log(obj.P1)



// if method name is same in both parent class
//  then first he take the method which is mention in right side
// it means the flow is worked righ to left