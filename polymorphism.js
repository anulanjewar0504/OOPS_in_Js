/*Polymorphism, a core concept in object-oriented programming, 
allows objects of different types to be treated as if they were the same type, 
enabling flexible and adaptable code.

JavaScript exhibits polymorphism in several ways:

    Inheritance-Based Polymorphism:
        Occurs when objects inherit properties and methods from a common ancestor, 
        allowing for different implementations of inherited behavior.*/

        //example
            class Animal {
                makeSound() {
                    console.log("Generic animal sound");
                }
            }
            
            class Dog extends Animal {
                makeSound() {
                    console.log("Woof!");
                }
            }
            
            class Cat extends Animal {
                makeSound() {
                    console.log("Meow!");
                }
            }
            
            function makeAnimalSound(animal) {
                animal.makeSound(); // Polymorphic call
            }
            
            makeAnimalSound(new Dog()); // Output: "Woof!"
            makeAnimalSound(new Cat()); // Output: "Meow!"
    
    /*Duck Typing:
        Focuses on object capabilities rather than strict types.
        If an object has the necessary properties or methods, it can be used, 
        even if it's not of the exact expected type.*/
        
        // example
            function calculateArea(shape) {
                return shape.width * shape.height;
            }
            
            const rectangle = { width: 10, height: 5 };
            const square = { side: 7 }; // Duck typing: has a "side" property
            
            console.log(calculateArea(rectangle)); // Output: 50
            console.log(calculateArea(square));   // Output: 49 (assuming square is a rectangle)
        
    /*Function Overloading:
        While not directly supported in JavaScript, 
        it can be simulated using techniques like optional parameters or rest parameters. */ 
        
        // Example:
            function add(x, y, z = 0) { // Optional z parameter
                return x + y + z;
            }
            
            console.log(add(2, 3));  // Output: 5
            console.log(add(2, 3, 4)); // Output: 9
    
            /* Operator Overloading:
                Not natively supported in JavaScript, but can be achieved to a limited extent using custom objects and methods.
                Benefits of Polymorphism:
            
            Code Reusability: 
                Write code that works with various object types without modification.
            Abstraction: 
                Focus on object behavior rather than implementation details.
            Flexibility: 
                Adapt code to different scenarios without extensive changes.
            Maintainability: 
                Improve code readability and organization.
            
            Polymorphism is a powerful tool for creating adaptable and maintainable JavaScript applications. 
            Understanding its different forms and benefits is essential for effective object-oriented programming.*/        