let score=33
console.log(typeof score);
console.log(typeof (score));

let score1= "33"
console.log(typeof score1);


let valueInNumber=Number(score1)
console.log(typeof valueInNumber);
console.log(valueInNumber);


let score2= "33abc"
console.log(typeof score2);


let valueInNumber1=Number(score2)
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

let score3=null
console.log(typeof score3);

let valueInNumber2=Number(score3)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


let score4=undefined
console.log(typeof score4);

let valueInNumber3=Number(score4)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score5=true
console.log(typeof score5);

let valueInNumber4=Number(score5)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);


let score6="rishabh"
console.log(typeof score6);

let valueInNumber5=Number(score6)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn=1
console.log(typeof isLoggedIn);
let booleanisLoggedIn=Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

let isLoggedIn1=""
console.log(typeof isLoggedIn1);
let booleanisLoggedIn1=Boolean(isLoggedIn1)
console.log(booleanisLoggedIn1);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber);

