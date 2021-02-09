/**
 * Boolean
 */
let isDone: boolean = false;

/**
 * Number
 */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// trên vscode báo lỗi khi khai báo kiểu biginit
// let big: bigint = 100n;

/**
 * String
 */
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbing`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old next month`;

/**
 * Array
 */
let listA: number[] = [1,2,3];
let listB: Array<number> = [1,2,3];

/**
 * Tuple
 */
let x: [string, number];
x = ["hello", 10];

/**
 * Enum
 */
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
