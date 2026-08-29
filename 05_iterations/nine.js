const nums=[1,2,3]

// const numsval=nums.reduce(function(acc,currVal){
//     console.log(`acc is ${acc} & currVal is ${currVal}`);
//     return acc+currVal
    
// },0)
// console.log(numsval);

// const mytotal=nums.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const shoppTotal=shoppingCart.reduce((acc,item)=>acc+item.price ,0)
console.log(shoppTotal);
