// Objective Questions
// q: What is the command to initialize a new Git repository in your project ?
//     ans.git init

// Variables and Data Types:
// q: What will typeof null return in JavaScript ?
//     ans : object

// Operators:
// q: Which of the following is a logical operator ?
//     ans : &&

//     Coding Challenges
// Conditional Statements:
// Write a function that checks whether a number is positive, negative, or zero and returns the result as a string.
// ans is below

// const number = 0;
// if (number > 0) {
//     console.log("positive")
//     return "Positive";

// } else if (number == 0) {
//     console.log("Zero")
//     return "Zero";
// } else {
//     console.log("Negative")
//     return "Negative";
// };

// ========================
// Loops:
// Write a program to print all even numbers between 1 and 20 using a for loop.
// ans is below

// const a = 20;
// for (let i = 1; i <= a; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// ========================
// Question :
// 2D Arrays:
// Write a function that calculates the sum of all elements in a 2D array.
// Example Input: [[1, 2], [3, 4], [5, 6]]
// Expected Output: 21
// ans below

// const arr = [[1, 2], [3, 4], [5, 6]];
// const arr2 = arr.flat();
// const sum = arr2.reduce((a, b) => a + b, 0);
// console.log(sum)

// Conceptual Questions
// Variables and Data Types:
// Explain the difference between var, let, and const in JavaScript.
// ans is below

// let and const is bloc scope and var is function scope
// if we Use var then I should be accessible in the whole function
// But If We USe const and Let it should be separate in each block We can't acces it Another Block

// Functions:
// Why are functions considered reusable code blocks in JavaScript ? Provide an example.
// We can reUse Function in JavaScript Because it is a Block of Code Which can be Reuse Any Where in the Code
// Use Can Code EasilY and Maintain Easily
// OUr Code is Readable and Easy to Understand
// and it's Time save Example In below

// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2));
// console.log(add(4, 5));
// console.log(add(40, 5));

// ===
// HTML and JS Integration:
// How can you attach a JavaScript function to a button click in HTML ? Write a small example.
// Example In below
//  <button onclick="myFunction()">Click me</button> //Supposs Button In a Htaml */ }
// add script tag in html like this <script src"index.js"></script> //suppos my js file name is index.js
// Now Here Example Js COde ===ok
// const myFunction = () => {
//     alert("Button clicked");
// }

// Advanced Functions
// String Manipulation:
// Write a function that reverses a string.
// Example Input: "hello"
// Expected Output: "olleh"
// ans below
// const S = "hello";
// const reversed = S.split("").reverse().join("");
// console.log(reversed);

// Date Utilities:
// Write a program that prints the current date in the format YYYY - MM - DD.
// const date = Date.now();
// let day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(date);
// let month = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
// let year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
// console.log(`${year}-${month}-${day}`);

// Bonus Challenge
// Create a program that takes an array of numbers and filters out all odd numbers using the filter method.
// Ans is below

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const filtered = arr.filter(num => num % 2 === 0);
// console.log(filtered)

// Write a switch statement that takes a day of the week (e.g., "Monday") and prints whether it’s a weekday or weekend.
// ans is below


// switch (new Date().getDay()) {
//     case 1: console.log("MonDay"); break;
//     case 0: console.log("SunDay"); break;
//     case 2: console.log("TuesDay"); break;
//     case 3: console.log("WednesDay"); break;
//     case 4: console.log("TharsDay"); break;
//     case 5: console.log("FriDay"); break;
//     case 6: console.log("SeturDay"); break;
//     default: console.log("You Are Failer");
// }


/////////////////////////////////////////
//
//
//              Result: 87%- A Grade