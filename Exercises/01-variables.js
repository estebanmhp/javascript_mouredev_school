// var
// console.log(helloWorld) -> Hoisting problem

var helloWorld = "Hello, JavaScript!"
console.log(helloWorld)

helloWorld = "Hello, world!"
console.log(helloWorld)

// let
// console.log(helloWorld2) -> Not a hoisting problem

let helloWorld2 = "Hello, JavaScript 2!"
console.log(helloWorld2)

helloWorld2 = "Hello, world 2!"
console.log(helloWorld2)

// const
// console.log(helloWorld3) -> Not a hoisting problem

const helloWorld3 = "Hello, JavaScript 3!"
console.log(helloWorld3)

// Error
// helloWorld3 = "Hello, world 3!"
// console.log(helloWorld3)
