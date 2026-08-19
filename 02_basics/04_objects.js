const tinderUser=new Object()
tinderUser.id="123abc"
tinderUser.name="Rishabh"
tinderUser.isLoggedIn=true

console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullName :{
        userFullName :{
            first:"Rishabh",
            last:"Chauhan"
        }
    }
}
console.log(regularUser.fullName);


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3={5:"e",6:"f"}

console.log({obj1,obj2,obj3});

const obj4=Object.assign({},obj1,obj2,obj3)
console.log(obj4);

const obj5={...obj1,...obj2,...obj3}
console.log(obj5);


console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));



const user=[
    {
        email:"rishab",
        name:"rishabh"
    },
    {
        email:"rishab",
        name:"rishabh"
    },
    {
        email:"rishab",
        name:"rishabh"
    }
]


console.log(user[1].email)

console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const course ={
    coursename:"JS",
    price:99,
    courseInstructor:"Rishabh"
}

console.log(course.courseInstructor);

const {courseInstructor:inst}=course

console.log(inst);


{
    "name":"Rishabh",
    "coursename":"Js",
    "Price":"free"
}

[
    {}
    {}
    {}
]