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
        enemy.health -= 5;
        console.log(this.name+" hits "+enemy.name+" for 5 points of damage.. bringing "+enemy.name+"'s hitpoints down to "+enemy.health)
    }
    this.kick = function(enemy){
        karate = (15 * strength)
        enemy.health -= karate;
        console.log(this.name+" hits "+enemy.name+" for "+karate+" points of damage.. bringing "+enemy.name+"'s hitpoints down to "+enemy.health)
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
console.log(punch instanceof Ninja);
console.log(kick instanceof Ninja);

