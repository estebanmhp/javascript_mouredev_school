// 1. Catch an exception using try-catch

try {
    console.log(exception)
} catch (error) {
    console.log(error.message)
}

// 2. Catch an exception using try-catch and finally

try {
    console.log(exception)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Loading...")
}

// 3. Throw a generic exception

throw new Error("Generic exception")

// 4. Create a custom exception

class MyError extends Error {
    constructor(message) {
        super(message)
    }
}
// 5. Throw a custom exception

try {
    console.log(exception)
} catch (error) {
    throw new MyError("This is a custom exception" + error.message)
} 

// 6. Throw multiple exceptions based on a defined logic

function sumInt(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new TypeError("Just numbers")
    } else if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Just integers")
    } else {
        return (a + b)
    }
}

// 7. Catch multiple exceptions in a single try-catch

try {
    console.log(sumInt(5, 10))
    console.log(sumInt(5.5, 10))
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error:" + error.message)
    } else if (error instanceof Error) {
        console.log("Error:" + error.message)
    }
}

// 8. Create a loop that tries to convert each value to float and catch and display errors

let numbers = ["3.14", "42", "hello", "7.89", "not a number", "5.12"]

for (let i = 0; i < numbers.length; i++) {
    try {
        let float = parseFloat(numbers[i])
        if(Number.isNaN(float)) {
            throw new Error(`\"${numbers[i]}\" is not a number`)
        } else {
            console.log(`${numbers[i]} as float = ${float}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

// 9. Create a function that checks if an object has a specific property and throws a custom exception

class CheckProperty extends Error {
    constructor(message) {
        super(message)
    }
}

let pet = {
    name: "Luna",
    owner: "Ruth"
}

function checks(object, property) {
    try {
        let found = false
        for (let value in object) {
            if (value === property) {
                found = true
                console.log(`The object has the property ${property}`)
            }
        }
        if (!found) {
            throw new CheckProperty(`The object doesnt have the property ${property}`)
        }
    } catch (error) {
        console.log(error.message)
    }
}

checks(pet, "owner")
checks(pet, "age")

// 10. Create a function that retries in case of error up to a maximum of 10 times

function numberRandom(min, max, chance = 0.9) {
    if (Math.random() < chance) {
        return (null);
    }
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}

function retries(numberRandom, a, b, times = 10) {
    for (let i = 1; i <= times; i++) {
        try {
            let number = numberRandom(a, b)
            if (Number.isInteger(number)) {
                console.log(`Attemp ${i} executed correctly, the random number was: ${number} `)
                return("Successful")
            } else {
                throw new Error(`Attemp ${i} failed`)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    console.log(`Maximum attempts were reached: ${times}`)
    return ("Failed")
}

console.log(retries(numberRandom, 1, 100))