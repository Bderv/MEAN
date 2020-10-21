// 1. 
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "9";  //---turned 9 to a string "9"

//2.
function sayHello(name: string){
    return `Hello, ${name}!`;
}
 // This is working great:
console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello("9")); //changed 9 to "9", 9 has to be a string if it wants to be read as a string

//3. 
function fullName(firstName: string, lastName: string, middleName: string){
let fullName = `${firstName} ${middleName} ${lastName}`;
return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "", "Jones")); // in order to display the full name, we still need a string for the middle name even if there isn't one. so instead of skipping the middle name we put the string but leave it empty

//4.
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
}
 // This seems to work fine:
console.log(graduate(christine));
 // This one has problems:
console.log(graduate(jay)); // it had problems because the const jay had belts spelled without the s. because it was mispelled it wasn't reading its objects and wouldn't let it run.

//5.
class Ninja {
    fullName: string;
    constructor(
    public firstName: string,
    public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
}
    debug(){
console.log("Console.log() is my friend.")
    }
}
 // This is not making an instance of Ninja, for some reason:
const shane = new Ninja("shane","mcdowell"); //your making a new ninja which needs 2 parameters 
const turing = new Ninja("alan","turing")
// same with this guy, who tried using full name as a param but thats too many
function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

//6. 
var increment = (x:number) => x + 1 //you have to say x is a number
// This works great:
console.log(increment(3));
var square = (x:number) => x * x
// This is not showing me what I want:
console.log(square(4))
// This is not working:
var multiply = (x:number,y:number) => x * y //you need parathesis and define the parameters x and y as numbers
var math = (x:number, y:number) => {
let sum = x + y
let product = x * y
let difference = Math.abs(x-y)
return [sum, product, difference]
}
console.log(math(4,5)) // console logging it to bring the function to LIFE

//7.
class Elephant {
    constructor(public age: number){}
    birthday = () => { //change function to arrow function with parent brackets equal to the birthday
    this.age++;
    }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)


