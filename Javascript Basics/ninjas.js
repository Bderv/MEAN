function Ninja(name, health=100, speed, strength) {
    this.name = name;
    this.health = health;
    var speed = 3;
    var strength = 3;
    this.sayName = function(){
        console.log("Hi, name is " + this.name);
    }
    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
    }
    this.drinkSake = function(){
        this.health += 10;
    }
    this.punch = function(enemy){
        enemy.health -= 10;
        console.log(this.name+" hits "+enemy.name+" for 10 points of damage.. bringing "+enemy.name+"'s hitpoints down to "+enemy.health)
    }
    this.kick = function(enemy){
        enemy.health -= 15;
        console.log(this.name+" hits "+enemy.name+" for 15 points of damage.. bringing "+enemy.name+"'s hitpoints down to "+enemy.health)
    }
}

var ninja1 = new Ninja("Itachi");
var ninja2 = new Ninja("Jiraya");
ninja1.sayName()
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja1.punch(ninja2);
ninja2.kick(ninja1);

