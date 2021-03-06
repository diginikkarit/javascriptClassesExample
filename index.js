//This is small example of using classes
// good links:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://reactgo.com/node-es6-imports/
// https://www.youtube.com/watch?v=teDVlOjOCT0
//
// note: this app has esm package included in package.json

//Import Classes
import {Car, Truck} from './Classes/Car'
import PersonClass from './Classes/Person'
import CarHandler from './Classes/CarHandler'
import CarChecker from './Classes/CarHandler'
import Person from './Classes/Person'
import GameInfo from './Classes/GameInfo'   

console.log("Index started")

//var pr = new PersonClass("Heikki","Mustonen",333)

// var auto1 = new Car("BMW","br-44")
// var auto2 = new Car()
// auto2.brand = "Volvo"
// auto2.model = "740 GL"
// let randomObject = {dude:"Heikki",profession:"24h enterteiner"}
// console.log("\n car stuff \n")
// console.log("This object is of a Car Class : "+CarChecker(auto2))
// console.log("This object is of a Car Class : "+CarChecker(auto1))
// console.log("This object is of a Car Class : "+CarChecker(randomObject))

// console.log("\n Truck stuff")
// let rekka = new Truck("scania","xb-gg",444)

// //will not work
// rekka.driver = randomObject
// let dude = new Person("Joakkim","Tiihonen",3345)
// console.log(dude.firstName)
// //does work
// rekka.driver = new PersonClass("Heikki","Koponen",3354) 
// //console.log(rekka.hv)

console.log("---- GameInfo Test ------")
//Create empty
// let emptyGameInfo = new GameInfo();
// emptyGameInfo.gameName = "Game of emptyness"
// emptyGameInfo.PrintGameInfo()

//Creating a class from an object. No id provided
let gameInfo1 = new GameInfo({gameName:"Surviving the aftermath", steamLink:"https://store.steampowered.com/app/684450/Surviving_the_Aftermath/"});
gameInfo1.PrintGameInfo();
console.log("This is the "+gameInfo1.gameName+" and it has an id of "+gameInfo1.gameId+".\n")

//using test

//Creating with id as string. 
let gameInfo2 = new GameInfo({gameId:"22",gameName:"The Thronebreaker", steamLink:'https://store.steampowered.com/app/684450/Surviving_the_Aftermath/'})
gameInfo2.PrintGameInfo()

//Creating with id as number
let gameInfo3 = new GameInfo({gameId:2334,gameName:"The Goonies", steamLink:'https://store.steampowered.com/app/684450/Surviving_the_Aftermath/'})
gameInfo3.PrintGameInfo()

//Creating with bad string
let gameInfo4 = new GameInfo({gameId:"Keinonen",gameName:"The Keinonen Game", steamLink:'https://store.steampowered.com/app/684450/Surviving_the_Aftermath/'})
gameInfo4.PrintGameInfo()

//using static class to retrieve data from DB and create instance
let retrievedGame = GameInfo.GetGameInfoFromDBWithID(34556)
retrievedGame.PrintGameInfo()

//Create gameInfo and set a Person as main contact
let gameInfo5 = new GameInfo({gameId:666,gameName:"The Contact Person Game", steamLink:'https://store.steampowered.com/app/599140/Graveyard_Keeper/'})
let contactPerson1 = new PersonClass("Kalevi","Naapanki",3345)
gameInfo5.mainContact = contactPerson1
gameInfo5.PrintGameInfo()

