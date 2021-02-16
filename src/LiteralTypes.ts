/**
 * Literal Narrowing
 */
const helloWorld = "Hello World";

/**
 * String Literal Types
 */
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      // ... 
    } else if (easing === "ease-out") {
      // ...
    } else if (easing === "ease-in-out") {
      // ...
    } else {
      // ...
    }
  }  
}

let button = new UIElement();
button.animate(0,0, "ease-in");

/**
 * Numeric Literal Types
 */
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}

const result = rollDice();

/**
 * Boolean Literal Types
 */
interface ValidationSuccess {
  isValid: true;
  reason: null;
}

interface ValidationFailure {
  isValid: false;
  reason: string;
}

type ValidationResult = ValidationSuccess | ValidationFailure;

