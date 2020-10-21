class Ninja{
    constructor(name, health=100, speed, strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`Hi, my name is ${this.name}`);
    }
    showStats(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
    punch(enemy){
        enemy.health -= 5;
        console.log(`${this.name} hits ${enemy.name} for 5 points of damage.. bringing ${enemy.name}'s hitpoints down to ${enemy.health}`)
    }
    kick(enemy){
        enemy.health -= (15 * this.strength);
        console.log(`${this.name} hits ${enemy.name} for ${(15 * this.strength)} points of damage.. bringing ${enemy.name}'s hitpoints down to ${enemy.health}`)
    }
}
// Add your sensei class bubba
class Sensei extends Ninja {
    constructor(name, health, speed, strength, wisdom){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom(){
        this.drinkSake()
        console.log(`The best way to win a way is without ever fighting`)
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
const sensei1 = new Sensei("Splinter",200,10,10,10);
sensei1.speakWisdom();


