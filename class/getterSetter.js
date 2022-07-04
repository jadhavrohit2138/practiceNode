var decorate = require('getter-setter').browser


    obj = decorate({
        hello: 'world'
    });


 
// outputs "world"
console.log(obj.get('hello'));
 
// outputs "bye"
obj.set('hello', 'soon')
console.log(obj.get('hello'));