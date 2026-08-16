const name="Rishabh"
const repoCount=50

console.log(name+repoCount+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("Rishabh")
console.log(gameName);

console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const anothername=gameName.substring(-3,4);
console.log(anothername);
console.log(gameName.slice(-6,4));

const anotherStringOne="     Rishabh   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const nameOfMine="RishabhChauhan"
console.log(nameOfMine.replace("bh",'c'));

console.log(nameOfMine.includes("Chau"));

const newUrl="rishabh-Chauhan-Hello-World"
console.log(newUrl.split('-'));









