class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        return 'Beep!'
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}`;
    }
}



const meganVehicle = new Vehicle('BMW', 'Mini Cooper', 2016);
console.log(meganVehicle);

class Car extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 4;
    }
}

const meganCar = new Car('Honda', 'Fit', 2022);

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine(){
        return 'VROOM!!';
    }
}

const meganMotorcycle = new Motorcycle('Harley Davidson', 'Bike', 1989);

class Garage{
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(newVehicle){
        if(!(newVehicle instanceof Vehicle)){
            return 'Only vehicles are allowed in here!'
        }
        if(this.vehicles.length >= this.capacity){
            return 'Sorry, the garage is full.'
        }
        this.vehicles.push(newVehicle);
        return 'Vehicle has been added to your garage!'
        
    }
}

let garage = new Garage(4);
