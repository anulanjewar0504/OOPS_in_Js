
/*Key points to remember:
    Purpose: 
        A constructor is a special function that creates and initializes objects within a class.

    Invocation: 
        It's automatically called when you use the new keyword to create an instance of a class.

Syntax:
*/
class ClassName {
    constructor(parameters) {
        // Initialization code using `this` to refer to the new object
    }
}

/*this keyword: 
    Inside the constructor, this refers to the newly created object, 
    allowing you to set its initial properties and state.

Example:
*/
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Alice", 30); // Calls the constructor
console.log(person1.name); // Output: "Alice"

/* Additional insights:
    Default constructor: 
        If you don't define a constructor, JavaScript provides an empty default one.
    Inheritance: 
        In class hierarchies, use super() to call the parent class's constructor within a child class's constructor, ensuring proper inheritance.
    Constructor property: 
        Every object has a constructor property that points to the function that created it.*/