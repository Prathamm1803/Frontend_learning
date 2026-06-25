//Arithmetic Operators
let x = 20;
let y = 10;

console.log(x+y); //Add
console.log(x-y); //Subs
console.log(x*y); //Multi
console.log(x/y); //Div
console.log(x%y); //Rem
console.log(x**2); //Exp

//Assignment Operators
let a = 20;
a += 5;
console.log(a);
a -= 10;
console.log(a);
a *= 2;
console.log(a);
a /= 3;
console.log(a);
a %= 4;
console.log(a);

//Comparision Operators
let num1 = 20;
let num2 = 10;

console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 < num2);
console.log(num1 <= num2);

console.log(num1 == num2); //Loose Equality
console.log(num1 === num2); //Strict Equality

console.log(10 == "10"); //true
console.log(10 === "10"); //false

//Type COnversion
// String -> Number
let str = "120";
let num = Number(str);
console.log(num);
console.log(typeof num);

//Invalid Conversion
let invalid = "120abc";
console.log(Number(invalid)); //NaN

//Boolean -> Number
console.log(Number(true)); //1
console.log(Number(false)); //0

//Null & Undefined
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

//Number -> String
let val = 100;
let strVal = String(val);

console.log(strVal);
console.log(typeof strVal);

//Boolean Conversion
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean("")); //false
console.log(Boolean("Hello")); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false

//Floating Point Precision
let p = 0.1;
let q = 0.2;
console.log(p+q); //0.300000000000000004

//Null & Undefined Comparision
console.log(null == undefined); //true
console.log(null === undefined); //false

console.log(null == 0); //false
console.log(null >= 0); //true
console.log(null > 0); //false

console.log(undefined >= 0) //false

//NaN
console.log(NaN == NaN); //false

//String Comparision
console.log("Rohit" > "Hitman");
//Lexicographicallly Comparision

//For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//Do-While Loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//If-Else
let age = 25;
if (age >= 18) {
    console.log("Eligible to VOte");
} else {
    console.log("Not Eligible");
}

//Else if
age = 70;
if (age < 18) {
    console.log("kid");
} else if (age >= 60) {
    console.log("oldie");
} else {
    console.log("young");
}

//Logical Operator

//AND &&
console.log(true && true);
console.log(true && false);

//OR ||
console.log(true || false);
console.log(false || false);

//Not Operator 
console.log(!true);
console.log(!false);

//Not Equal
console.log(5 != 4);
console.log(5 !== "5");

//Bitwise Operations
console.log(2 & 5); //AND
console.log(2 | 5); //OR
console.log(2 ^ 5); //XOR
console.log(~2); //NOT