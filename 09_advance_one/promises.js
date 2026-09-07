const promiseOne=new Promise(function(resolve,reject){
    //Do an aysnc task
    // crypography,network calls,DB calls

    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");

})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Rishabh",email:"rishabh@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})



// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false;
//         if(!error){
//             resolve({username:"Rishaaaabh",password:"123"});
//         }
//         else{
//             reject("ERROR,something went wrong")
//         }
//     },1000)
// })

// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then(function(username){
//     console.log(username);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log("Finished");
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true;
//         if(!error){
//             resolve({username:"Javascript",password:"123"});
//         }
//         else{
//             reject("ERROR,JS went wrong")
//         }
//     },1000)
// })


// async function consumePromiseFive(){
//     try{
//         const response=await promiseFive
//         console.log(response);
        
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// consumePromiseFive()


// async function getAllusers(){
//     try{
//         const response =await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getAllusers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
    
})