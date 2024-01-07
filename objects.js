/*Objects in JavaScript are fundamental building blocks for structuring and organizing data. 
They are essentially collections of key-value pairs, where:

Keys are unique names or strings that identify properties of the object.
Values can be any data type, including primitive values (numbers, strings, booleans), 
other objects, or functions.

Key concepts and features:

Creating objects:
*/
    const person = {
        name: "John Doe",
        age: 30,
        hobbies: ["reading", "coding"]
};


// Constructor function:

    function createPerson(name, age) {
        return { name, age };
    }
    const anotherPerson = createPerson("Jane Smith", 25);

// Accessing properties:

    console.log(person.name); // Output: "John Doe"
    console.log(person["age"]); // Alternative syntax using bracket notation

// Adding or modifying properties:

    person.city = "New York";
    person.age = 31; // Update existing property

// Deleting properties:

    delete person.hobbies;

Methods:

// Functions attached to objects, defining actions they can perform.
const car = {
    make: "Toyota",
    model: "Camry",
    start() {
        console.log("Car started!");
    }
};
car.start(); // Output: "Car started!"

/*Object prototypes:

Every object inherits properties and methods from its prototype.
Allows for code sharing and inheritance.

Additional notes:

    Objects are mutable, meaning their properties and values can change after creation.
    They are passed by reference, so any changes to an object will affect all variables referencing it.
    JavaScript is often described as prototype-based, meaning objects inherit properties from prototypes 
    rather than traditional classes (although classes are a syntactic sugar over prototypes).
    Objects are essential for modeling real-world entities and data structures in JavaScript. 
    They provide flexibility and versatility in organizing and managing information within your code.*/