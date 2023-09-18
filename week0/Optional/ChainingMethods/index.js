class User {	// declare a class and give it name User
    constructor( username , emailAdress) {
        this.name = username
        this.email = emailAdress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance +=amount ;
        return this
    }
    makeWithdrawal(amount){
        this.accountBalance -=amount ;
        return this
    }
    displayBalance (){
        console.log(  `User : ${this.name} _ and his Balance :  ${this.accountBalance}`)
        return this
    }
    transferMoney (toHow , amount){
        toHow.makeDeposit(amount)
        this.makeWithdrawal(amount)
        console.log(`balance account of   ${this.name} : ${this.accountBalance}`)
        console.log(`balance account of ${toHow.name} : ${toHow.accountBalance}` )
        return this
    }
}

const omar = new User("omar frikha", "omar.frikha96@gmail.com");
const sahar = new User("sahar frikha", "testset@gmail.com");
const ali = new User("ali frikha", "settsetst@gmail.com");


omar.makeDeposit(100).makeDeposit(200).makeDeposit(300).makeWithdrawal(200).displayBalance()

sahar.makeDeposit(100).makeDeposit(500).makeWithdrawal(100).makeWithdrawal(200).displayBalance()

ali.makeDeposit(800).makeWithdrawal(200).makeWithdrawal(300).makeWithdrawal(200).displayBalance()

omar.transferMoney(sahar ,100)
