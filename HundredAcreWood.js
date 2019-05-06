var Heffolumps = {character: "Heffolumps"}
var Eeyore = {character: "Eeyore"}
var Kanga = {character: "Kanga"}
var Owl = {character: "Owl"}
var Christopher_Robin = {character: "Christopher Robin"}
var Rabbit = {character: "Rabbit"}
var Gopher = {character: "Gopher"}
var Piglet = {character: "Piglet"}
var Winnie_The_Pooh = {character: "Winnie_The_Pooh"}
var Bees = {character: "Bees"}
var Tiger = {character: "Tiger"}


Eeyore.east = Heffolumps;
Heffolumps.west = Kanga.north = Eeyore;
Eeyore.south = Christopher_Robin.north = Kanga;
 Kanga.south = Rabbit.west = Winnie_The_Pooh.north = Owl.east = Christopher_Robin;
Christopher_Robin.west = Piglet.north = Owl;
Christopher_Robin.east = Bees.north = Gopher.west = Rabbit;
Rabbit.east = Gopher;
Winnie_The_Pooh.east = Rabbit.south = Bees;
Owl.south = Winnie_The_Pooh.west = Piglet;
Piglet.east = Tiger.north = Christopher_Robin.south = Bees.west = Winnie_The_Pooh;
Winnie_The_Pooh.south = Tiger;

console.log(Tiger);
console.log(Tiger.north.character);
console.log(Piglet.north.character);
console.log(Rabbit.south.character);
console.log(Winnie_The_Pooh);


