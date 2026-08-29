// for of

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const num of arr){
    //console.log(num);
}

const greetings="Hello World!"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
    
}

const map=new Map();
map.set("In","India")
map.set("Fr","France")
map.set("USA","United State")
map.set("Ind","India")


//console.log(map);

for(const [key,value] of map){
    console.log(key,'--',value);
    
}

// const myObj={
//     "game1":"Spiderman",
//     "game2":"NFS"
// }
// for(const [key,value] of myObj){
//     console.log(key,'--',value);
    
// }