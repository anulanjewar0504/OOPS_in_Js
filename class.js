/*What are classes?

    Classes provide a blueprint for creating objects with similar properties and behaviors.
    They offer a structured way to organize and manage code, promoting code reusability and maintainability.
    While JavaScript is a prototype-based language, classes offer a more familiar syntax for those coming from class-based languages.

Example*/

class ClassName {
    // Class body containing properties and methods
}

/* Constructor:

    A special method, called when a new object is created using new.
    Used to initialize the object's properties.
    Defined as constructor(parameters) { ... }.

Methods:

    Functions defined within a class, representing actions that objects can perform.
    Accessed using dot notation on object instances.

Properties:

    Data associated with objects, representing their state.
    Can be initialized in the constructor or defined directly within the class.

Inheritance:

    Classes can inherit properties and methods from other classes using the extends keyword.
    Child classes can override or extend inherited behavior.

Static methods and properties:

    Belong to the class itself, not individual instances.
    Accessed using the class name directly.
Example: */ 

class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log(`Starting the ${this.make} ${this.model}`);
    }
  
    static getInfo() {
      console.log("This is a Car class.");
    }
  }
  
  const myCar = new Car("Honda", "Accord", 2023);
  myCar.start(); // Output: "Starting the Honda Accord"
  Car.getInfo(); // Output: "This is a Car class."

  const my2car = new Car("BMW","X4", 2024);
  my2car.start(); // Output: "Starting the BMW X4"</
  Car.getInfo();
  