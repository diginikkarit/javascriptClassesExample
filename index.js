//This is small example of using classes
// good links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://reactgo.com/node-es6-imports/
// https://www.youtube.com/watch?v=teDVlOjOCT0
//
// note: this app has esm package included in package.json

//Import Classes
import {Car, Truct} from './Classes/Car'
import PersonClass from './Classes/Person'
import CarHandler from './Classes/CarHandler'
import CarChecker from './Classes/CarHandler'

console.log("Index started")

//var pr = new PersonClass("Heikki","Mustonen",333)

var auto1 = new Car("BMW","br-44")
var auto2 = new Car()
auto2.brand = "Volvo"
auto2.model = "740 GL"
let randomObject = {dude:"Heikki",profession:"24h enterteiner"}

console.log("This object is of a Car Class : "+CarChecker(auto2))
console.log("This object is of a Car Class : "+CarChecker(auto1))
console.log("This object is of a Car Class : "+CarChecker(randomObject))

console.log("\n Truck stuff")
let rekka = new Truct("scania","xb-gg",444)

//will not work
rekka.driver = randomObject

//does work
rekka.driver = new PersonClass("Heikki","Koponen",3354) 
//console.log(rekka.hv)

