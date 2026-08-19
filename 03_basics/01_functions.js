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


