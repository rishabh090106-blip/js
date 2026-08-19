function myname(){
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("B");
    console.log("H");
}
myname()

function addtwo(num1,num2){
    console.log(num1+num2);
    
}
const result =addtwo(2,3)



function addtwoNo(num1,num2){
    return num1+num2
    
}
const result1 =addtwoNo(2,4)
console.log("RESULT : ",result1);


function loggedInUser(username="Rahul"){
    if(!username){
        return `Please enter your name`
        
    }
    return `${username} just logged in`
    
}
console.log(loggedInUser());




function calculateCartPrice(v1,v2,...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300,400,500,600));


const user={
    username:"Rishabh",
    price:99
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"Sam",
    price:8332
})


const newArray=[1,2,3,4,5,6]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(newArray));
console.log(returnSecondValue([3,1,5,3,6]));
