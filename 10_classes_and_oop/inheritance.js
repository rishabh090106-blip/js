class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}
class teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    newCourse(){
        console.log(`New Course was added by ${this.username}`);
    }
}

const chai = new teacher("chai", "chai@teacher.com", "123")
const masalaChai=new user("masalaChai")
chai.logMe()
chai.newCourse()
masalaChai.logMe()
// masalaChai.newCourse()

console.log(chai instanceof user);