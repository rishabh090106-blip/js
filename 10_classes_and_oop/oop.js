// const user={
//     username:"Rishabh",
//     loginCount:9,
//     signedIn:true,
    
//     getUserDetails:function(){
//         console.log("Got user details from Database");
//         console.log(`Username:${this.username}`);
//         console.log(this);
        
        
//     }
// }
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);



function user(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    this.greetings=function(){
        console.log(`Welcome: ${this.username}`);
        
    }

    // return this

}

const userOne=new user("Rishabh",2,true,)
const userTwo=new user("Rishaaaabh",3,true)
console.log(userOne);
console.log(userOne.greetings());

// console.log(userOne.constructor);

