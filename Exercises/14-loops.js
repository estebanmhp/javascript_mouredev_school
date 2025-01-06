// Loops (control structures)

// for (iterative variable; condition; increment/decrement)
// the iterative variable is local, just exist inside of the loop

for (let i = 0; i < 5; i++) { 
    console.log(`Hello, ${i}`)
}

const numbers = [1, 2, 3, 4, 5]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Element: ${numbers[i]}`)
}

// while (condition)

let i = 0

while (i < 5) {
    console.log(`Hello, ${i}`)
    i++
}

i = 0 // reset the variable, due to the previous while loop the value of i changed ( i = 5)

while (i < numbers.length) {
    console.log(`Element: ${numbers[i]}`)
    i++
}

// infinite loop -> while(true) {...}

// do while -> do {code} while (condition)
// in this case the code inside of do is going to be executed at least one time, 
// depend on the condition in while

i = 7

do { 
    console.log(`Hello, ${i}`)
    i++
} while (i < 5)

// for of (move througth iterative data types)

let myArray = [1, 2, 3, 4] 
let mySet = new Set (["Book1", "Book2", "Book3", "Book4", "Book5"])
let myMap = new Map([
    ["name", "Macarena"],
    ["animal", "Dog"],
    ["age", 6]
])
let myString = "JavaScript Course"

for (let value of myArray) {
    console.log(value)
}
for (let value of mySet) {
    console.log(value)
}
for (let value of myMap) {
    console.log(value)
}
for (let value of myString) {
    console.log(value)
}

// RECOMMENDATIONS (Best practices)

// break and continue

for (let i = 0; i < 10; i++) {
    if (i == 5) {
        continue // ignores and skips when the condition is true
    } else if (i == 8) {
        break // stop the loop when the condition is true
    } 
    console.log(`Hello, ${i}`)
}
