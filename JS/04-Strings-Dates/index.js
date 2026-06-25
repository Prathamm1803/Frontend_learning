// STRING DECLARATION
const str1 = "Pratham";
const str2 = 'Mittal';

const day = 18;

// Template Literals
const message = `JavaScript Day ${day}`;
console.log(message);

// STRING PROPERTIES
const text = "Hello Coder Army";

console.log(text.length);      // Total characters
console.log(text[0]);          // H
console.log(text[6]);          // C

// Strings are Immutable
// text[0] = "h";   // Not Allowed
console.log(text);

// UPPERCASE & LOWERCASE
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// SEARCHING IN STRING
const sentence = "Hello Coder Army Coder";

console.log(sentence.indexOf("Coder"));      // First Occurrence
console.log(sentence.lastIndexOf("Coder"));  // Last Occurrence

console.log(sentence.includes("Coder"));     // true
console.log(sentence.includes("coder"));     // false (Case Sensitive)

// SLICE

// slice(start, end)
console.log(sentence.slice(0, 5));     // Hello
console.log(sentence.slice(6));        // Coder Army Coder
console.log(sentence.slice(-5));       // Coder
console.log(sentence.slice(-10, -5));  // Army

// SUBSTRING

// Negative index is treated as 0
console.log(sentence.substring(0, 5));
console.log(sentence.substring(6, 11));

// STRING CONCATENATION
const firstName = "Pratham";
const lastName = "Mittal";

console.log(firstName + " " + lastName);

// Better Way
console.log(`${firstName} ${lastName}`);

// STRING + NUMBER
console.log(24 + "Rohit");      // 24Rohit
console.log(24 + "Rohit" + 10); // 24Rohit10
console.log(24 + 30 + "Rohit"); // 54Rohit

// REPLACE
console.log(sentence.replace("Coder", "Developer"));
console.log(sentence.replaceAll("Coder", "Developer"));

// TRIM
const user = "   Pratham Mittal   ";
console.log(user);
console.log(user.trim());

// SPLIT
const students = "Pratham Rohit Aman Virat";
console.log(students.split(" "));

const fruits = "Apple,Banana,Mango";
console.log(fruits.split(","));

// DATE OBJECT
const now = new Date();
console.log(now);

console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());

// DATE METHODS
console.log(now.getDay());        // 0-6 (Sunday = 0)
console.log(now.getDate());       // Date of Month
console.log(now.getMonth());      // 0-11
console.log(now.getFullYear());

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// CUSTOM DATE

// Month starts from 0
const customDate = new Date(2025, 8, 20, 8, 25, 16, 125);
console.log(customDate.toString());

// TIMESTAMP

// Current Timestamp (Milliseconds since 1 Jan 1970)
const currentTimestamp = Date.now();
console.log(currentTimestamp);

// Timestamp -> Date
const dateFromTimestamp = new Date(currentTimestamp);
console.log(dateFromTimestamp);

// Specific Timestamp
const anotherDate = new Date(1759275037293);
console.log(anotherDate);

// DATE TO TIMESTAMP
console.log(now.getTime());

// Returns timestamp of current Date object
// USEFUL EXAMPLES

// Current Year
console.log(new Date().getFullYear());

// Current Month (1-12)
console.log(new Date().getMonth() + 1);

// Current Date
console.log(new Date().getDate());

// Current Time
console.log(new Date().toLocaleTimeString());