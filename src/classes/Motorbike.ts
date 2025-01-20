// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// Motorbike class should extends the Vehicle class and names its properties
class Motorbike extends Vehicle{
  
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  )
// TODO: The constructor should call the constructor of the parent class, Vehicle
{
  super();

  // TODO: The constructor should initialize the properties of the Motorbike class
this.vin = vin;
this.color = color;
this.make = make;
this.model = model;
this.year = year;
this.weight = weight;
this.topSpeed = topSpeed;
    
    // Checking wheels array. If it does not have 2 elemenrts, it creates a new one.
    if (wheels.length !== 2) {
      this.wheels = Array(2).fill(null).map(() => new Wheel());
    } else {
      this.wheels = wheels;
    }
  }

  // Implements the wheelie method and logging a message
    wheelie(): void{
console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }  
  
  // Override printDetails method from the Vehicle class and calling parent class
  override printDetails(): void {

  super.printDetails();

// Once completed,the information below will log
  console.log(`VIN: ${this.vin}`);
  console.log(`Make: ${this.make}`);
  console.log(`Model: ${this.model}`);
  console.log(`Year: ${this.year}`);
  console.log(`Weight: ${this.weight} lbs`);
  console.log(`Top Speed: ${this.topSpeed} mph`);
  console.log(`Color: ${this.color}`);
  console.log(`${this.wheels} wheels`);
  }
}

// Export the Motorbike class as the default export
export default Motorbike;
