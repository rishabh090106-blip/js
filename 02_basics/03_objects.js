//Singleton
//Object.create

//Object literals


const sym1=Symbol("key1")


const jsUser={
    "name name":"Rishabh",
    [sym1]:"key1",
    age:20,
    location:"Gajraula",
    email:"rishabh09@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Sunday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["name name"]);
console.log(jsUser[sym1]);


jsUser.location="Noida"
// Object.freeze(jsUser)
jsUser.location="Delhi"
console.log(jsUser);


jsUser.greeting=function(){
    console.log("Hello JS user");
    
}
jsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.location}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


