//Variables
let name = "Pratham"; //string
let age = 21;

console.log(name);
console.log(age);

if (true) {
    let mark = 90;
    console.log(mark);
}
// console.log(mark) (error)

const id = 12345;
console.log(id);
//id = 54321; (error)

var city = "Ayodhya";
var city = "Faizabad"; //redeclaration allowed

console.log(city);

//Datatypes
console.log(typeof 10); //number
console.log(typeof "Hey"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object

//BigInt
let big = 12345678901234567890n;
console.log(typeof big); //bigint

//Symbol
const id1= Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2); //false

//Array
let arr = [10, 20, 30];
console.log(arr); //[ 10 20 30 ]

//Object
let user = {
    name: "Pratham",
    age: 21
};
console.log(user);

//Function
function greet() {
    console.log("Hey");
}
greet();

//Immutable
let a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);

//Mutable
let person = {
    name: "Pratham"
};

let another = person;
another.name = "aman";
console.log(person);