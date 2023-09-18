class User {	// declare a class and give it name User
    constructor( username , emailAdress) {
        this.name = username
        this.email = emailAdress
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance +=amount ;
    }
    makeWithdrawal(amount){
        this.accountBalance -=amount ;
    }
    displayBalance (){
        console.log( "User : " ,this.name ,"Balance : " ,this.accountBalance)
    }
    transferMoney (toHow , amount){
        toHow.makeDeposit(amount)
        this.makeWithdrawal(amount)
        console.log(`balance account of   ${this.name} : ${this.accountBalance}`)
        console.log(`balance account of ${toHow.name} : ${toHow.accountBalance}` )
    }
}

const omar = new User("omar frikha", "omar.frikha96@gmail.com");
const sahar = new User("sahar frikha", "testset@gmail.com");
const ali = new User("ali frikha", "settsetst@gmail.com");


omar.makeDeposit(100);
omar.makeDeposit(200);
omar.makeDeposit(300);
omar.makeWithdrawal(200);
omar.displayBalance()

sahar.makeDeposit(100);
sahar.makeDeposit(500);
sahar.makeWithdrawal(100);
sahar.makeWithdrawal(200);
sahar.displayBalance()

ali.makeDeposit(800);
ali.makeWithdrawal(200);
ali.makeWithdrawal(300);
ali.makeWithdrawal(200);
ali.displayBalance()


omar.transferMoney(sahar ,100)
