// Functions

// Declaration of a function

function myFunc() {
    console.log("Hello, function!")
}

// Invocate a function (calling it)

myFunc()

for (let i = 0; i < 5; i++) {
    myFunc()
}

// Parameters

function myParameter(name) {
    console.log(`Hello, ${name}!`)
}

myParameter("Caleb")
myParameter("Jenna")

// Anonymous functions (function without name, it need to be assigned to a variable)

const anonymous = function (name) {
    console.log(`Hello, ${name}!`)
}

anonymous("David")

// Arrow functions (it need to be assigned to a variable)

const arrow = (name) => {
    console.log(`Hello, ${name}!`)
}

const arrow2 = (name) => console.log(`Hello, ${name}!`)

arrow("James")
arrow2("Jessy")

// More parameters

function sum(a, b) {
    console.log(a + b)
}

sum (5, 10)
sum (5) // prints "NaN"

// default parameters

function defaultSum(a = 0, b = 0) {
    console.log(a + b)
}

defaultSum() // = 0
defaultSum(5) // 5 + 0 = 5
defaultSum(b = 5) // 0 + 5 = 5
defaultSum(5, 10) 

// returning values

function mult(a, b) {
    return (a * b)
}

let result = mult(5, 10)
console.log(result)


// Nested funcions

function extern() {
    console.log("Extern")
    function intern() {
        console.log("Interior")
    }
    intern()
}

extern() // if intern is not called inside the extern, it would be out of the scope

// Higher-Order functions

function applyFunc(func, param) {
    func(param)
}

applyFunc(arrow, "Higher-order Function!")

// for each (function (method) to execute loops related to iterative elements)

let numbers = [1, 2, 3, 4]

numbers.forEach((value) => console.log(value))
numbers.forEach(function (value) {
    console.log(value)
})

let names = new Set(["Jane", "Jhon", "Andrew"])

names.forEach((name) => console.log(name))
names.forEach(function (name) {
    console.log(name)
})

let fruits = new Map([
    ["apple", "red"],
    ["banana", "yellow"],
    ["grape", "purple"],
    ["orange", "orange"],
    ["kiwi", "green"]    
])

fruits.forEach((fruit) => console.log(fruit))
fruits.forEach(function (fruit) {
    console.log(fruit)
})