
class Car{
    constructor(year){
        this.modelYear = year
        this.wheels = 4
        this.lights = "off"
        this.speed = 0
        this.engineStatus="off"
        this.acclePower=0
        this.brakePower=0
        this.name="car"
    }
    lightsOnOff(){
        if(this.lights=== "off"){
            this.lights= "on"
            return "lights on"
        }else{
            this.lights="off"
            return "lights off"
        }
    }
    signal(onOff,leftRight){
        if(onOff ="on" && leftRight === "left"){
            return "signalling left"
        } else if (onOff ="on" && leftRight === "right"){
            return "signalling right"
        }else{
            return "signalling off"
        }
    }
    engineOn(){
        this.engineStatus = "on"
    }
    engineOff(){
        this.engineStatus = "off"
        this.speed = 0
    }
    accelerate(){
        if(this.engineStatus){
                this.speed+=this.acclePower
            return this.speed
        }else{
            return "engine is off"
        }
    }
    braking(){
        if(this.engineStatus && this.speed >= this.brakePower){
            this.speed -= this.brakePower
            return this.speed
        }else if(this.speed<this.brakePower){
            this.speed=0
            return this.speed
        }else{
            return "engine is off"
        }
    }
    carInfo(){
        return `${this.modelYear} ${this.name}: ${this.wheels} Wheels, Lights are ${this.lights}, Current Speed is ${this.speed}km/hr, Engine is ${this.engineStatus}, Accelerating Power is ${this.acclePower} horsepower, Braking Power is ${this.brakePower}.`
    }
}
let myCar = new Car()

class Tesla extends Car{
    constructor(year){
        super(year)
        this.name="Tesla"
        this.acclePower=10
        this.brakePower=7
    }
}
let myTesla1 = new Tesla(2017)
let myTesla2 = new Tesla(2018)

class Tata extends Car{
    constructor(year) {
        super(year)
        this.name="Tata"
        this.acclePower=2
        this.brakePower=1.25
    }
}
let myTata1 = new Tata(1998)
let myTata2 = new Tata(2003)

class Toyota extends Car{
    constructor(year){
        super(year)
        this.name="Toyota"
        this.acclePower=7
        this.brakePower=5
    }
}
let myToyota1 = new Toyota(2001)
let myToyota2 = new Toyota(2007)

var cars=[myTesla1,myTesla2,myTata1,myTata2,myToyota1,myToyota2]

const sortCollectionY = (arr) => {
    let carModelYear =[]
    for(let i=0;i<arr.length;i++){
        carModelYear.push(arr[i].modelYear)
    }
    let carCollection = carModelYear.sort(function(a,b){
        return a-b
    })
    return carCollection
}
// console.log(sortCollection(cars))

const sortCollectionYN = (arr) => {
    let carModelName=[]
    for(let i=0;i<arr.length;i++){
        carModelName.push(`${arr[i].modelYear} ${arr[i].name}`)
    }
    let carCollection = carModelName.sort()
    return carCollection
}
console.log(sortCollectionYN(cars))

const sortCollectionNY = (arr) => {
    let carModelName=[]
    for(let i=0;i<arr.length;i++){
        carModelName.push(`${arr[i].name} ${arr[i].modelYear}`)
    }
    let carCollection = carModelName.sort()
    return carCollection
}
console.log(sortCollectionNY(cars));

// const sortCollectionYN = (arr) => {
//     return sortCollectionName(arr).concat(sortCollection(arr))
// }
// // console.log(sortCollectionYN(cars))
