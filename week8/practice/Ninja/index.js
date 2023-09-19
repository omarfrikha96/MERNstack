class ninja {
    constructor(name,health ){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
        sayName(){
            console.log(this.name )
        }
        showStats() {
            console.log(this.name,this.health ,this.speed ,this.strength ) 
        }
        drinkSake(){
            this.health += 10
        }
    }
    const ninja1 = new ninja("Hyabusa", 100);
    ninja1.sayName();
    ninja1.showStats();
    