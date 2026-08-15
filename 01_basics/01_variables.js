const accountId=144553
let accountEmail="rishabh@gmail.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 //not allowed

accountEmail="udbe@gmail.com"
accountPassword="12123"
accountCity="bengaluru"
let accountState;

console.log(accountId)

/*
prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

