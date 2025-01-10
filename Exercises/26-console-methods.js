// Console methods

// log 

console.log("JavaScript") 

// error

console.error("Error found" + new Error("Conection failed")) 

// warn

console.warn("Something is going wrong, becareful")

// info

console.info("Just an info message")

// table

let data = [
    {name: "Sara", age: 37},
    {name: "Wiwis", age: 21}
]

console.table(data)

// group

console.group("User:")
console.log("Name: Jane")
console.log("Age: 37")
console.groupEnd()

// time

console.time("Execute time")
for(let i = 0; i < 1000; i++) {
    console.log(i)
}
console.timeEnd("Execute time")

// assert

let age = 18

console.assert(age < 18, "The user should be an adult")

// count

console.count("Count")
console.count("Count")
console.count("Count")
console.count("Count") // 4
console.countReset("Count")
console.count("Count") // 1

// trace

function funA () {
    funB()
}
function funB() {
    console.trace("Execution route")
}

funA()

// clear

console.clear()

