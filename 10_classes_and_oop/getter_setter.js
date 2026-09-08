class user{
    constructor(email,password){
        this.email=email,
        this.password=password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}rishaaaabh`
    }
    set password(value){
        this._password=value
    }
}
const rishabh=new user("rishabh@gmail.com","abc")
console.log(rishabh.email);
console.log(rishabh.password);
