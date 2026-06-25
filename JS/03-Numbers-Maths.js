// NUMBER METHODS
let integer = 10;
let decimal = 345.6821;

console.log(typeof integer);
console.log(typeof decimal);

// Returns a string with fixed decimal places
console.log(decimal.toFixed(2)); // "345.68"
console.log(typeof decimal.toFixed(2)); // string

// Returns a string with specified significant digits
console.log(decimal.toPrecision(4)); // "345.7"

// Convert Number to String
console.log(decimal.toString());
console.log(typeof decimal.toString());

// NUMBER OBJECT

// Primitive Number
let num1 = 20;
let num2 = 20;

console.log(num1 == num2);   // true
console.log(num1 === num2);  // true

// Number Object
let objNum1 = new Number(20);
let objNum2 = new Number(20);

console.log(objNum1 == objNum2);   // false
console.log(objNum1 === objNum2);  // false
// Every object has a different reference

// PRIMITIVE VS REFERENCE

// Primitive -> Copy by Value
let a = 10;
let b = a;
b = 20;

console.log(a); // 10
console.log(b); // 20

// Non Primitive -> Copy by Reference
let person1 = {
    name: "aman"
};
let person2 = person1;
person2.name = "Pratham";

console.log(person1);
console.log(person2);

// Different Objects
let student1 = {
    name: "aman"
};

let student2 = {
    name: "aman"
};

console.log(student1 == student2);   // false
console.log(student1 === student2);  // false

// MATH OBJECT
console.log(Math.abs(-10));      // Absolute Value
console.log(Math.PI);            // π
console.log(Math.LN10);          // Natural Log of 10
console.log(Math.SQRT2);         // √2

console.log(Math.ceil(6.2));     // 7
console.log(Math.floor(6.8));    // 6
console.log(Math.round(6.5));    // 7

console.log(Math.max(10, 50, 20));
console.log(Math.min(10, 50, 20));

console.log(Math.pow(2, 5));     // 32
console.log(Math.sqrt(64));      // 8
console.log(Math.log10(100));    // 2

// RANDOM NUMBERS

// Generates value between 0 (inclusive)
// and 1 (exclusive)
console.log(Math.random());

// RANDOM NUMBER (1 - 10)
let random1to10 = Math.floor(Math.random() * 10) + 1;
console.log(random1to10);

// Formula
// Math.floor(Math.random() * totalOutcomes) + minimumValue

// RANDOM DICE (1 - 6)
let dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// RANDOM NUMBER (15 - 25)
let random15to25 = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
console.log(random15to25);

// General Formula
// Math.floor(Math.random() * (max - min + 1)) + min

// OTP GENERATOR (1000 - 9999)
let otp = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
console.log("Generated OTP:", otp);