class ninja {
    constructor(name,health,speed = 3,strength= 3){
        this.name = name
        this.health = health
        this.speed = speed
        this.strength = strength
    }
        sayName(){
            console.log(this.name )
        }
        showStats() {
            console.log(this.name,this.health ,this.speed ,this.strength ) 
        }
        drinkSake(){
            this.health += 10
            console.log(this.health ) 

        }
    }

    class sensei extends ninja {
        constructor(name,health = 200,speed = 10,strength= 10 , wisdom=10 ){
            super(name , health, speed,strength)
            this.wisdom = wisdom
        }
        speakWisdom() {
            console.log("Speaking wisdom...");
            this.drinkSake();
            console.log("What one programmer can do in one month, two programmers can do in two months")
          }
    }

