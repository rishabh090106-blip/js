// Date

let myDate=new Date();
console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());


let myCreatedDate=new Date(2027,0,9,5,3,7);
console.log(myCreatedDate.toLocaleString());

let newDatee=new Date("2026-01-09")
console.log(newDate.toLocaleString());

let timeStamp=Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(timeStamp/1000));


let newDate=new Date();
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',{
    weekday:"long"
}));














