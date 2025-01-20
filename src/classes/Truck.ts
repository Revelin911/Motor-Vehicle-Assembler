// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


// creates the class Truck 
class Truck extends Vehicle implements AbleToTow {
  public vin: string;
  public color: string;
  public year: number;
  public weight: number;
  public topSpeed: number;
  public wheels: Wheel[];
  public towingCapacity: number;
  public make: string;
  public model: string; 

constructor( // constructor accepting properties of truck class
  vin: string,
  color: string,
  make: string,
  model: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number,
)  
  {
    super(); //taking in Vehicle properties (parent class)
    this.vin = vin;
  this.color = color;
  this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
  this.towingCapacity = towingCapacity;
  this.make = make;
  this.model = model;

  if (wheels.length !== 4) { // checking the wheels array and adding them accordingly
      this.wheels = Array(4).fill(null).map(() => new Wheel());
    } else {
      this.wheels = wheels;
    }
  }

  // Implementing the tow method from AbleToTow interface to check if the vehicle can be towed or not according to weight
  tow(vehicle: Truck | Motorbike | Car): void {
    if(vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} will be towed.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
    }
}

// Override printDetails method from the Vehicle class and calling parent class
override printDetails(): void {
  super.printDetails();
  console.log(`Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`);
}
}

// Export the Truck class as the default export
export default Truck;

