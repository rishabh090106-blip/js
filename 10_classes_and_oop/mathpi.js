console.log(Math.PI)
Math.PI=2
console.log(Math.PI)
const prop=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(prop);

const chai={
    name:"ginger chai",
    price:250,
    isAvailable:true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}
chai.name="masala chai"
console.log(chai);

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
Object.defineProperty(chai,"name",{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

chai.name="rishabh"
console.log(chai);
for(let [key,value] of Object.entries(chai)){
    if(typeof value!='function'){
        console.log(`${key}:${value}`);
    }
    
    
}

