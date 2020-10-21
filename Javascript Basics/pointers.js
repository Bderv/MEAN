var tigger = { character: "Tigger" }; // start with just the character attribute
var pooh = { character: "Winnie the Pooh" };
tigger.north = pooh; // add more attributes, where we are actually storing the memory location for the other object
pooh.south = tigger;
var piglet = { character: "Piglet"};        // create Piglet's home object with just the character attribute
piglet.east = tigger.north;          // Piglet's east attribute is Tigger's north attribute, which is a memory address
tigger.north.west = piglet;          // Follow Tigger's north attribute to a location in memory
pooh.west = piglet;                                  // Assign that object's west attribute to piglet
var owl = { character: "Owl"};
piglet.north = owl;
pooh.north.west = owl;
var Christopher_Robin = { character: "Christopher Robin"};
owl.east = Christopher_Robin;
pooh.north = Christopher_Robin;
var bees = { character: "Bees" };
tigger.north.east = bees;
pooh.east = bees;
bees.west = pooh;
var rabbit = { character: "Rabbit" };
bees.north = rabbit;
Christopher_Robin.east = rabbit;
var gopher = { character: "Gopher" };
rabbit.east = gopher;
bees.north.east = gopher;
var kanga = { character: "Kanga" };
Christopher_Robin.north = kanga;
rabbit.north.west = kanga;
var eeyore = { character: "Eeyore" };
kanga.north = eeyore;
var heffalumps = { character: "Heffalumps" };
eeyore.east = heffalumps
kanga.north.east = heffalumps

var player = {
    location: tigger
}

function move(){
    var elem = document.getElementsByName("player")
    var location = tigger;
    
}

