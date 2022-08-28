
var user = {name:'alex'}

/**
 * @description Ways to fetch prototype
 * */
console.log(Object.getPrototypeOf(user))

console.log(user.__proto__)

console.clear();

/**
 * @description printing the prototype chain 
 */
function Test() {}
let proto = Test;

(function(){

    do  {
      proto = proto.__proto__;
      console.log(proto);
    } while(proto !== null)
})()
