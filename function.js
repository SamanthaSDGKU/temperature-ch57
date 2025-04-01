console.log("Functions.js")
//variables
let name="Mike";
let lastName = "Scott";

//concatenation
console.log("Hello " + name + " " + lastName + ", welcome!");
console.log(`Hello ${name} ${lastName} ${1+1}, welcome!`);

// 1. function declaration (create a function)
function sayHello(){
    //block of the function
    console.log("Hello cohort 57");
}

//2. call the function (code, console, from the user)
sayHello();
sayHello();

//Example 2, with 1 parameter
function greet(name){
    console.log(`Hello ${name}, welcome!`);
}

greet("Hodor");
greet("Ivan");

// Example 3, with 2 parameter 

function greet2(name1,name2){
    console.log(`Hello ${name1} and ${name2}, welcome!`);
}

greet2("Patrick","Kenny");

// Challenge 1: Double the Number
// Task:
// - Create a function called `doubleNumber` that takes one number as a parameter.
// - The function should return the number multiplied by 2.
// - Print the result when you call the function with different numbers.

function doubleNumber(num){
    console.log(num*2);
}

doubleNumber(5); //10
doubleNumber(4); //8
doubleNumber(3); //6

// example 4, with a prompt

function welcome(){
    let name2 = prompt("Enter your name: ");
    let age2 = prompt("Enter your age: ");

    console.log(`Welcome ${name2} - ${age2}`);
}

// call the function on the console

// exmaple 5, with default parameters
function add(num1=0,num2=0){
    console.log(`The sum is ${num1} + ${num2} = ${num1+num2}`);
}

add();
add(57.6,9.3);
add(50,100);

// Challenge 2: Combine Names
// Task:
// - Create a function called `combineNames` that takes two parameters: `firstName` and `lastName`.
// - The function should return the full name in the format: `"firstName lastName"`.
// - If either parameter is missing, it should use the default value `"Unknown"` for that parameter.

function combineNames(fname="Unknown",lname="Unknown"){
    console.log(` ${fname} ${lname}`);
}

combineNames("Alice", "Johnson");   // Should print: Alice Johnson
combineNames("Alice");              // Should print: Alice Unknown
combineNames();                     // Should print: Unknown Unknown

// Challenge 3: Convert Minutes to Seconds
// Task:
// - Create a function called `convertToSeconds` that takes one parameter, `minutes`.
// - The function should return the number of seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

function convertToSeconds(){
    let min = prompt("Enter minutes");
    document.getElementById("results").innerHTML= `${min*60} seconds`;    
}