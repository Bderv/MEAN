class Bike {
price: number;
max_speed: string;
miles: number;
constructor(price:number, max_speed:string) {
    this.price = price;
    this.max_speed = max_speed;
    this.miles = 0;
}
displayInfo(){
console.log(this.price, this.max_speed, this.miles)
}
ride(){
this.miles += 10 
console.log("Riding!")
return this.miles
}
reverse(){
this.miles -= 5
console.log("Reversing")
if (this.miles <= 0){
    this.miles = 0
}
return this.miles
}
}

var Schwin = new Bike(150,"48mph")
var GT = new Bike(400,"52mph")
var Diamondback = new Bike(150,"25mph")

Schwin.ride()
Schwin.ride()
Schwin.ride()
Schwin.reverse()
Schwin.displayInfo()

GT.ride()
GT.ride()
GT.reverse()
GT.reverse()
GT.displayInfo()

Diamondback.reverse()
Diamondback.reverse()
Diamondback.reverse()
Diamondback.displayInfo()

