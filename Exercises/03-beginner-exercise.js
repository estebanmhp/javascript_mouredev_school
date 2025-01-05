// 1. Write a single-line comment
// This is a single-line comment. Answering the first task

// 2. Write a multi-line comment
/*
This is a multiple-line comment.
Answering the second task.
*/

// 3. Declare variables with values assigned to all primitive data types
let person = "Example" // String
let phone = 1234 // Number
let live = true // Boolean
let future // Undefined
let nothing = null // Null
let mySymbol = Symbol("id") // Symbol
let bigValue = 2210n // Big Int

// 4. Log the value of all variables to the console
console.log(person)
console.log(phone)
console.log(live)
console.log(future)
console.log(nothing)
console.log(mySymbol)
console.log(bigValue)

// 5. Log the type of all variables to the console
console.log(typeof person)
console.log(typeof phone)
console.log(typeof live)
console.log(typeof future)
console.log(typeof nothing)
console.log(typeof mySymbol)
console.log(typeof bigValue)

// 6. Next, change the values of the variables to others of the same type
person = "Another one"
phone = 56789
live = false
future = undefined // still undefined
nothing = null // still null
mySymbol = Symbol("user")
bigValue = 1407n

// 7. Next, change the values of the variables to others of a different type
person = 0
phone = false
live = "Beatifull"
future = null
nothing = undefined
mySymbol = 702210n
bigValue = Symbol("password")

// 8. Declare constants with values assigned to all primitive data types
const spiderman = "Good neighbor"
const pi = 3.1416
const water = true
const past = undefined
const no = null
const yes = Symbol("si")
const big = 9999n

// 9. Next, try to modify the values of the constants
const spiderman = "x" // Cannot redaclare block-scoped varialbe 'spiderman'
const pi = 1 // Cannot redaclare block-scoped varialbe 'pi'
const water = false // Cannot redaclare block-scoped varialbe 'water'
const past = 0 // Cannot redaclare block-scoped varialbe 'past'
const no = "no" // Cannot redaclare block-scoped varialbe 'no'
const yes = Symbol("maybe") // Cannot redaclare block-scoped varialbe 'yes'
const big = 1000n // Cannot redaclare block-scoped varialbe 'big'

// 10. Comment out the lines that produce any type of error when executed
// const spiderman = "x" -> error
// const pi = 1 -> error
// const water = false -> error
// const past = 0 -> error
// const no = "no" -> error
// const yes = Symbol("maybe") -> error
// const big = 1000n -> error
