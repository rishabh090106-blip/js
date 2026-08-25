const user={
    username:"Rishabh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username="Raj"
// user.welcomeMessage()


// console.log(this);


// function chai(){
//     let username:"rishabh"
//     console.log(this.username);
// }

// chai()



// const chai=function(){
//     let username:"rishabh"
//     console.log(this.username);
    
// }
// chai()




const chai=() => {
    let username="rishabh"
    console.log(this.username);
    
}
chai();


// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(3,5))

// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(3,6))

const addTwo=(num1,num2)=>({username:"Rishabh"})
console.log(addTwo(3,6))

//