/**
 * Hello World of Generics
 */
function identity<T>(arg: T): T {
  return arg;
}

/**
 * Generic Classes
 */
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x,y) {
  return x + y;
}
