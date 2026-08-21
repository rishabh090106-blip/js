var c=300
let a=100
if(true){
    let a=10
    const b=20
    // var c=30
    console.log("INNER:",a);
    

}

console.log(a);
// console.log(b);
// console.log(c)



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function one(){
    const username="Rishabh"
    function two(){
        const website="Yt";
        console.log(username);
    }
    // console.log(website);
    two();
    
}
one();




if(true){
    const username="Rishabh"
    if(username=="Rishabh"){
        const website="yt"
        // console.log(username+website);
        
    }
}
// console.log(username)


addOne(3)
function addOne(num){
    return num+1;
}



// addTwo(5)
const addTwo=function(num){
    return num+2
}
addTwo(5)
