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

/**
 * Readonly modifier
 */
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

/**
 * Static Properties
 */
class Grid {
  static origin = { x: 0, y: 0};

  calculateDistanceFromOrigin(point: { x: number, y: number}) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }

  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

