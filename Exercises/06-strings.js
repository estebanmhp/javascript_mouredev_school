// Strings

// Concatenate strings (+ operator)
let myName = "Wiwis"
let greeting = "Hello, " + myName + "!" 
console.log(greeting)
console.log(typeof greeting)

// Length of a string (property length)
console.log(greeting.length)

// Accessing a character in a string (use of the index position)
console.log(greeting[2])
console.log(greeting[0])
console.log(greeting[12])
console.log(greeting[13]) // undefined because positions start by 0 not by 1

// Common methods
console.log(greeting.toUpperCase()) // Converts to uppercase
console.log(greeting.toLowerCase()) // Converts to lowercase
console.log(greeting.indexOf("Wiwis")) // Return the first index of a specified value
console.log(greeting.indexOf("Hola")) // -1 = no match was found
console.log(greeting.includes("Wiwis")) // true if a string contains a specified value
console.log(greeting.includes("Hola")) // false if it doesnt contain
console.log(greeting.slice(0, 10)) // Return a specified section of a string
console.log(greeting.replace("Hello", "Welcome")) // Replace a specified value for a new one

// Template literals (backticks ``)
let message = `Hi, this is 
my JavaScript course
by Mouredev`
console.log(message) // Multiline string without \n

let course = "JavaScript course"
console.log(`Hi, ${myName}. Welcome to the ${course}!`) // String interpolation