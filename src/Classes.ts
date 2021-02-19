/**
 * Classes
 */
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");

/**
 * Inheritance
 */
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

/**
 * Public, private, and protected modifiers
 */
class Person {
  public name: string;
  private color: string;
  protected age: number;

  constructor(theName: string) {
    this.name = theName;
    this.color = "white";
    this.age = 4;
  }
}
let peter = new Person("Peter");