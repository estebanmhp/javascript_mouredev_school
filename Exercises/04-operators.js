//Operators

//Arithmetic operators

let a = 5
let b = 10
console.log(a + b) // Addition
console.log(a - b) // Subtraction
console.log(a * b) // Multiplication
console.log(a / b) // Division
console.log(a % b) // Modulus
console.log(a ** b) // Exponentiation
console.log(++a) // Increment
console.log(--b) // Decrement
a--
b++
console.log(a) // Another posibility for decrement
console.log(b) // Another posibility for increment

//Assignment Operators
let myVariable = 2 // = assign 
console.log(myVariable)
myVariable += 2 // += add and assign
console.log(myVariable)
myVariable -= 2 // -= substract and assign
console.log(myVariable)
myVariable *= 2 // *= multiply and assign
console.log(myVariable)
myVariable /= 2 // /= divide and assign
console.log(myVariable)
myVariable %= 2 // %= modulus and assign
console.log(myVariable)
myVariable **= 2 // **= exponentiation and assign
console.log(myVariable)

//Comparision Operators
a = 5
b = 10
console.log(a > b) // greater than
console.log(a < b) // less than
console.log(a >= b) // greater than or equal to
console.log(a <= b) // less than or equal to
console.log(a == b) // equal to (value)
console.log(a == 5) // expected true (equal value)
console.log(a == "5") // expected true (equal value, string or number it's the same)
console.log(a === 5) // strict equal to (value and type)
console.log(a === "5") // expected false (same value different type)
console.log(a != 5) // not equal to (value)
console.log(a !== "5") // strict not equal to (neither value nor type)

//Truthy values
console.log(0 == false) // 0 is equal to true
console.log(0 == "") // true because 0 is equal to an empty string
console.log(0 == " ")
console.log(0 == '')
console.log(undefined == null) // true because same value

//Falsy values
console.log(1 == false) // 1 or any different number to 0 is equal to false
console.log(2 == false)
console.log(0 == 'X') // false because it's not an empty string
console.log(0 === "") // false because same value, however, not same type
console.log(undefined === null) // false because same value, however, not same type

//Logical Operators
// and (&&), return true if both elements are true
console.log(5 > 10 && 15 > 20) // false
console.log(5 < 10 && 15 < 20) // true
console.log(5 < 10 && 15 > 20) // false
//or (||), return true if at least one element is true
console.log(5 > 10 || 15 > 20) // false
console.log(5 < 10 || 15 < 20) // true
console.log(5 < 10 || 15 > 20) // true
// not (!), return true if the value is false or false if the value is true
console.log(!(5 > 10 && 15 > 20)) // true
console.log(!(5 < 10 && 15 < 20)) // false
console.log(!(5 < 10 && 15 > 20)) // true

//Ternary Operators
// condition ? if true : if false
let raining = true
raining ? console.log("It is raining") : console.log("It is a sunny day")
raining = false
raining ? console.log("It is raining") : console.log("It is a sunny day")