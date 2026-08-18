const rcb=["Kohli","ABD","Gayle"]
const mi=["Rohit","Bumrah","Pandya"]
// rcb.push(mi)
// console.log(rcb);
// console.log(rcb[3][1]);

// const all=rcb.concat(mi)
// console.log(all);

const all_cric=[...rcb,...mi]
console.log(all_cric);

const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11]]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Rishabh"));
console.log(Array.from("Rishabh"));
console.log(Array.from({name:"Rishbh"}));

const s1=100
const s2=200
const s3=300
console.log(Array.of(s1,s2,s3));




