const userEmail="Rishah@gmail"
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Didn't get user Email");
    
}

const userEmail1=[]
if(userEmail){
    console.log("Got user Email");
}
else{
    console.log("Didn't get user Email");
    
}


// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}


if(userEmail1.length===0){
    console.log("array is empty");
    
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false



const price=100

price>90?console.log("more than 90"):console.log("less than 90")

