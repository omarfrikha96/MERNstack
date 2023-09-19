class BankAccount {
    constructor(intRate = 0.02, balance = 0) { // don't forget to add some default values for these parameters!
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
console.log(`balance after Interest : $ ${this.balence}`)
    }
    return this
    }
}

const bank1 = new BankAccount();
const bank2 = new BankAccount(0.04, 200);

bank1.deposit(50).deposit(150).deposit(100).withdraw(200).displayAccountInfo().yieldInterest()
console.log('---------')
bank2.deposit(50).deposit(150).withdraw(100).withdraw(50).withdraw(200).withdraw(200).displayAccountInfo().yieldInterest()