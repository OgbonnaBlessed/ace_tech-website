alert ("Good Morning");

// Strings
let Fruits = "Apple";

// Number
let Digit = 30;

//Boolean
let Filled = true;

// Calculations
let x = 2;

let y = 3;

//Addition
let a = x + y;
console.log(a);

//Subtraction
let b = x - y;
console.log(b);

//Multiplication
let n = x * y;
console.log(n);

// If Else loop
var num = 3;
if (num % 2 == 0) {
    console.log("The number is Even")
} else {
    console.log("The number is odd")
};

// For loop
for (let x = 0; x <= 10; x++) {
    console.log(x);
};

// Function
function addNumbers(a, b) {
    console.log(a + b);
}
addNumbers(7, 8);
addNumbers(17, 9);
addNumbers(6, 2);

// Array
let Fruit = ["Apple", "Orange", "Mango", "Pear"];
console.log(Fruit);

//Object
let Object = {Name: "James", Age: "34", Hobby: "Football"};
console.log(Object);

// Higher Order Functions
let arrayFirst = [2, 5, 8, 13];

let modifyArray = arrayFirst.filter((x) => x % 2);

console.log(modifyArray);
