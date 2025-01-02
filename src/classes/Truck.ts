// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


// TODO: Declare properties of the Truck class
// TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
// TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  public weight: number;
  public topSpeed: number;
  public wheels: Wheel[];
  public towingCapacity: number;
  public make: string;
  public model: string; 

constructor(
  vin: string,
  color: string,
  year: number,
  weight: number,
  topSpeed: number,
  wheels: Wheel[],
  towingCapacity: number,
  make: string,
  model: string,
)  // TODO: Create a constructor that accepts the properties of the Truck class
  // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  {
    super();
    
    this.weight = weight;
    this.topSpeed = topSpeed;
  this.towingCapacity = towingCapacity;
  this.make = make;
  this.model = model;

  if (wheels.length !== 4) {
      this.wheels = Array(4).fill(null).map(() => new Wheel(16));
    } else {
      this.wheels = wheels;
    }
  }

  // TODO: Implement the tow method from the AbleToTow interface
  // TODO: Get the make an model of the vehicle if it exists
  // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
  // TODO: If it is, log that the vehicle is being towed
  // TODO: If it is not, log that the vehicle is too heavy to be towed
  tow(vehicle: Truck | Motorbike | Car): void {
    if(vehicle.weight <= this.towingCapacity) {
      console.log(`${vehicle.make} ${vehicle.model} will be towed.`);
    } else {
      console.log(`${vehicle.make} ${vehicle.model} is too heavy to be towed.`);
    }
}

// TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
printDetails(): void {
  super.printDetails();
  console.log(`Weight: ${this.weight}, Top Speed: ${this.topSpeed}, Color: ${this.color}, Towing Capacity: ${this.towingCapacity}, Wheels: ${this.wheels.length}`);
}
}

// Export the Truck class as the default export
export default Truck;

