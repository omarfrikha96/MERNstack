class BankAccount {
    constructor(intRate = 0.05, balance = 0) { // don't forget to add some default values for these parameters!
    this.intRate = intRate
    this.balence = balance
    }
    deposit(amount) {
	this.balence += amount
    return this
    }
    withdraw(amount) {
	this.balence -= amount

    if(this.balence <0) {
        this.balence-= 5; 
        console.log( "Insufficient funds: Charging a $5 fee")
    }
    return this

    }
    displayAccountInfo() {
	console.log(`Balance: $ ${ this.balence}, Interest Rate: ${this.intRate}`)
    return this

    }
    yieldInterest() {
    if(this.balence >0) {
        this.balence +=  this.balence * this.intRate
    }
    return this
    }
}

class User {	// declare a class and give it name User
    constructor( username , emailAdress) {
        this.name = username
        this.email = emailAdress
        this.account = new BankAccount()
    }
    makeDeposit(amount) {
        this.account.deposit(amount)
        return this
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount)
        return this
    }
    displayBalance (){
        console.log( `User :  ${this.name} ,Balance : ${this.account.balence} , Interest : $ ${this.account.yieldInterest().balence}`)
        return this
    }
    transferMoney (toHow , amount){
        toHow.makeDeposit(amount)
        this.makeWithdrawal(amount)
        console.log(`balance account of   ${this.name} : ${this.account.balence}`)
        console.log(`balance account of ${toHow.name} : ${toHow.account.balence}` )
        return this
    }
}
const omar = new User("omar frikha", "omar.frikha96@gmail.com");

omar.makeDeposit(100).makeDeposit(200).makeDeposit(300).makeWithdrawal(200).displayBalance()