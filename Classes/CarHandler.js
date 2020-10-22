import {Car} from './Car'

export default function CarChecker(obj){

    //check that object is a intance of Car class
    if(obj instanceof Car){
        //console.log("Car class verified..")
        return true
    }
    else{
        //console.log("Was not type of Car..")
        return false
    } 
}

