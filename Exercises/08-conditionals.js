// if, else if, else
/*
/ if (condition) {
/ code
/ } else if (condition) {
/     code
/ } else {
/     code
/ }
*/

// if

let age = 22

if (age == 22) {
    console.log("The age is", age)
}

// else

age = 28

if (age == 22) {
    console.log("The age is", age)
} else {
    console.log("The age is not", age)
}

// else if

if (age > 18) {
    console.log("You are an adult", age)
} else if (age < 18) {
    console.log("You are a child, underge", age)
} else {
    console.log("The age is not correct, check the number")
}

// Ternary operator
// condition ? if the condition is true : if the condition is false
// It is possible to assing the result of the ternary to a variable

age = 16
const message = age > 18 ? "You are an adult" : "You are a child"
console.log(message)

// switch
/* 
/ switch (variable to check) {
/   case condition:
/       code
/       break;
/   case condition:
/       code
/       break;
/   default:
/       code
/       break;
/ }
*/


let day
let dayName

// first example of switch
day = 5

switch (day) {
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;
    case 7:
        dayName = "Sunday"
        break;
    default:
        dayName = "Your day doesnt exist, check it"
}
console.log(dayName)

// second example of switch

day = 10
switch (day) {
    case 1:
        dayName = "Monday"
        break;
    case 2:
        dayName = "Tuesday"
        break;
    case 3:
        dayName = "Wednesday"
        break;
    case 4:
        dayName = "Thursday"
        break;
    case 5:
        dayName = "Friday"
        break;
    case 6:
        dayName = "Saturday"
        break;
    case 7:
        dayName = "Sunday"
        break;
    default:
        dayName = "Your day doesnt exist, check it"
}
console.log(dayName)

