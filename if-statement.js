console.log("Conditionals");

//if-statements
// if(condition){ y/n ?
//  code to be executed if the condition is true
//}

if(3<5){
    console.log("This is true"); 
}

let student1 = 25;
let student2 = 25;

if(student1==student2){
    console.log("The values are the same");
}

//if-else statement 
//if(condition){
// code to be run if the condition is true
//}else{
// code to be run if the condition is false
//}
let isTrue =true;

if(isTrue == true){
    console.log("Yes");
}else{
    console.log("No");
}

let waterTemp=92;

if(waterTemp>=100){
    console.log("The water is boiling");
}else{
    console.log("The water is NOT boiling");
}

//Challenge 1: 
// check if the age is greater than 21
// T: display "you are an adult" 
// F: display "you are underage"

let age=30;

if(age>21){
    console.log("you are an adult");
}else{
    console.log("you are underage");
}

// else-if statement
//if(condition){
// code to be run if the condition is true
//}else if(condition2){
// code to be run if the condition2 is true
//}else{
// code to run if conditions are false
//}

age = prompt("Enter the age");//42

if(age<13){
    console.log("You are a child");
}else if(age<21){
    console.log("You are a teenager");
}else if(age <64){
    console.log("You are an adult");
}else{
    console.log("You are a Senior");
}

// challenge 2: 
// Scenario:
// You're designing a tiny system for self-driving bikes.
// Instructions:
// Ask for the traffic light color ("green", "yellow", or "red") and tell the bike what to do.
let light = prompt("Enter a color:");
if (light === "green") {
    console.log("Go!");
} else if (light === "yellow") {
    console.log("Slow down.");
} else if (light === "red") {
    console.log("Stop.");
} else {
    console.log("Invalid color. Please enter green, yellow, or red.");
}


//Challenge 3: Movie ticket price calculator

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    console.log( "Your ticket price is: $" + price);
}

// Challenge 4: Outfit suggestion
function weatherOutfit(){
    let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    
    if(tmp<15){
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt"; 
    }

    p.innerHTML="You should wear : " + outfit;
}

// Switch

let action = prompt("Choose an action:jump, run, attack, or defend");

switch(action){
    case "jump":
        console.log("You jumped over an obstacle");
        break;
    case "run":
        console.log("You are running fast");
        break;
    case "attack":
        console.log("You attacked the enemy!");
        break;
    case "defend":
        console.log("You blocked the attack");
    case "dance":
        console.log("You are dancing queen");
    case "drive":
        console.log("You in a car now!");
    default:
        console.log("Unknown action. Try again!");
}

//Challenge

// Instructions:
// Use the switch example provided.
// Add two more actions that a game character can do. (For example: "dance", "heal", "hide", etc.)
// Make sure to write a console.log() message for each new action.