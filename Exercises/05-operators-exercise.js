// 1. Create a variable for each arithmetic operation
let addition = 5 + 10;
let subtraction = 5 - 10;
let multiplication = 5 * 10;
let division = 5 / 10;
let modulus = 5 % 10;
let exponent = 5 ** 10;

let a = 5
let b = 10
let increment = ++a
let decrement = --b

// 2. Create a variable for each assignment operation,
//    using the variables from the arithmetic operations
let assign = addition
let add = addition
add += 20
let substract = subtraction
substract -= 2
let multiply = multiplication
multiply *= 3
let divide = division
divide /= 5
let mod = modulus
mod %= 10
let exp = exponent
exp **= 2

// 3. Print 5 true comparisons with different comparison operators
console.log (5 < 10)
console.log (a === 6)
console.log (a !== "6")
console.log (b == "9")
console.log(b >= a)

// 4. Print 5 false comparisons with different comparison operators
console.log (b == a)
console.log (a === "6")
console.log (b != 9)
console.log (b <= a)
console.log(a < 6)

// 5. Use the logical AND operator
console.log (b === 9 && a === 6) // true
console.log (5 < 10 && 2 < 1) // false

// 6. Use the logical OR operator
console.log (b === "9" || a === 6) // true
console.log (5 < 10 || 2 < 1) // true
console.log (5 > 10 || 0 > 1) // false

// 7. Combine both logical operators
console.log(a < b && b > 10 || 9 == false) // false
console.log(a < b && 5 < 5.1 || 0 == true) // true

// 8. Add a negation
console.log(!(a < b && b > 10) || 9 == false) // true
console.log(!(a < b && 5 < 5.1 || 0 == true)) // false

// 9. Use the ternary operator
let vision = 0
vision == 0? console.log("You don't need glasses") : console.log("You need glasses") // true condition
vision = 1
vision == 0? console.log("You don't need glasses") : console.log("You need glasses") // false condition

// 10. Combine arithmetic, comparison, and logical operators
console.log(((5 + 10) > 12) && 4 < 3 || vision == "1") // true
console.log(5 > 10 || ((2 ** 4) > 20) && !(1 != false)) // false