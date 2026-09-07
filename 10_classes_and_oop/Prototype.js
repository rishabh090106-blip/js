
// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros=["Bheem","Kalia"]

let heroPower={
    bheem:"laddu",
    kalia:"body",
    getBheemPower:function(){
        console.log(`Bheem Power is: ${this.bheem}`);
        
    }
}

Object.prototype.sayRishabh=function(){
    console.log("Rishabh is present in all Objects");
}
Array.prototype.heyRishabh=function(){
    console.log("Rishabh says hello");
    
}

heroPower.sayRishabh()
myHeros.sayRishabh()
myHeros.heyRishabh()
console.log(heroPower.bheem)
// heroPower.heyRishabh()



// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

console.log(TASupport.isAvailable);


//modern syntax

Object.setPrototypeOf(TASupport,Teacher)

let anotherUsername="Rishabh    "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"hitesh   ".trueLength();
