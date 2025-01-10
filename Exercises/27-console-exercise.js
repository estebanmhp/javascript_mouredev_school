// 1. Create a function that uses error correctly

function error() {
    try {
        console.log(pet)
    } catch (error) {
        console.error("Error found" + error.message)
    }
}

error()

// 2. Create a function that uses warn correctly

function checkAge(age) {
    if (age < 18) {
        console.warn("The user should be an adult")
    } else {
        console.log("User accepted")
    }
}

checkAge(17)

// 3. Create a function that uses info correctly

function userDetails(name, phone) {
    console.info(`User info: Name -> ${name}, Phone -> ${phone}`)
}

userDetails("White", 102049340)

// 4. Use table

let table = [
    {Pet: "Macarena", Owner: "Wiwis"},
    {Pet: "Artemis", Owner: "Mapis"}
]

console.table(table)

// 5. Use group

console.group("User:")
console.log("Name: Jenna")
console.log("Address: unknown")
console.groupEnd()

// 6. Use time

console.time("Execution time")
for(let i = 1; i <= 5; i++) {
    if(i == 5) {
        console.log("The end is comming")
    } else {
        console.log("Soon soon...")
    }
}
console.timeEnd("Execution time")

// 7. Validate with assert if a number is positive

function positive(number){
    if (number > 0) {
        console.assert(number < 0, "This number is positive")
    } else {
        console.assert(number > 0, "This number is negative")
    }    
}

positive(5)
positive (-5)

// 8. Use count

console.count("error")

// 9. Use trace

function trace() {
    console.trace("Trace")
}
function sum(a,b) {
    trace()
    return a + b
}

console.log(sum(2, 8))

// 10. Use clear

console.clear()