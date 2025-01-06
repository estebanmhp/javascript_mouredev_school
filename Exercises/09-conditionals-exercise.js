// if/else/else if/ternary

// 1. Print your name to the console if a variable takes its value

let myName = "Esteban"

if (myName == "Esteban") {
    console.log(myName)
}

// 2. Print a message to the console if the username and password match the established ones

let user = "admin"
let password = "1234"

if (user == "admin" && password == "1234") {
    console.log("Access granted")
} else {
    console.log("Incorrect credentials")
}

// 3. Check if a number is positive, negative, or zero and print a message

let number = -7

if (number == 0) {
    console.log("Equal to zero")
} else if (number > 0) {
    console.log("Positive number")
} else {
    console.log("Negative number")
}

// 4. Check if a person can vote or not (18 or older) and indicate how many years are left

let age =  16

if (age >= 18) {
    console.log("You can vote")
} else {
    console.log(`You cannot vote. You need to wait ${18 - age} years`)
}

// 5. Use the ternary operator to assign the value "adult" or "minor" to a variable
//    depending on the age

let person = age >= 18 ? "adult" : "minor"
console.log(person)

// 6. Show which season of the year it is based on the value of the "month" variable

let month = 11

if (month >= 1 && month <= 3) {
    console.log("Winter")
} else if (month >= 4 && month <= 6) {
    console.log("Spring")
} else if (month >= 7 && month <= 9) {
    console.log("Autumn")
} else if (month >= 10 && month <= 12) {
    console.log("Summer")
} else {
    console.log("Incorrect value. Please check it")
}

// 7. Show the number of days in a month depending on the variable from the previous exercise

if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    console.log("This month has 31 days")
} else if (month == 4 || month == 6 || month == 9 || month == 11) {
    console.log("This month has 30 days")
} else if (month == 2) {
    console.log("This month has 28 days or 29 days every 4 years")
} else {
    console.log("Incorrect value. Please check it")
}

// switch

// 8. Use a switch to print a different greeting message depending on the language

let language = "it"
let greeting

switch (language) {
    case "en":
        greeting = "Good morning"
        break;
    case "es":
        greeting = "Buenos días"
        break;
    case "pt":
        greeting = "Bom dia"
        break;
    case "it":
        greeting = "Buongiorno"
        break;
    default:
        greeting = "Your language is not supported"
}

console.log(greeting)

// 9. Use a switch to redo exercise 6

month = 5
let season

switch (month) {
    case 1: case 2: case 3:
        season = "Winter"
        break;    
    case 4: case 5: case 6:
        season = "Spring"
        break;
    case 7: case 8: case 9:
        season = "Autumn"
        break;
    case 10: case 11: case 12:
        season = "Summer"
        break;
    default:
        season = "Incorrect value. Please check it"
}

console.log(season)

// 10. Use a switch to redo exercise 7

month = 10
let days

switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = "This month has 31 days"
        break;
    case 4: case 6: case 9: case 11:
        days = "This month has 30 days"
        break;
    case 2:
        days = "This month has 28 days or 29 days every 4 years"
        break;
    default:
        days = "Incorrect value. Please check it"
}

console.log(days)