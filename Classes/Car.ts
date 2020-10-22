import Person from './Person'

class Car{

    brand:string
    model:string
    _driver:Person

    constructor(brand, model)
    {
        this.brand = brand
        this.model = model
        
    }

    set driver(driver:Person){
        if(driver instanceof Person){
            let msg = "Person set as a driver"
            msg += "\nname:"+driver.firstName+" "+driver.lastName
            msg += "\nsalary:"+driver.salary
            console.log(msg)
            this._driver = driver
        }
        else{
            console.log("Error setting driver")
        }
    }

    get driver(){
        return this._driver
    }
}

class Truck extends Car {

    hv:number

    constructor(brand,model,hv){
        super(brand,model)
        this.hv = hv
    }
}

export {Car, Truck};