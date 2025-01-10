// Error handling

// Exception

let myObject
// console.log(myObject) -> Undefined is "correct"
// console.log(myObject.email) -> Error, an exception

// try-catch

try {
    // Code that tries to execute
    console.log(myObject.email)
} catch {
    // Code if there is any bug
    console.log("Error found")
}

// catch

try {
    console.log(myObject.email)
} catch (error) {
    console.log("Error found", error.message)
}

// finally

try {
    console.log(myObject)
} catch (error) {
    console.log("Error found", error.message)
} finally {
    console.log("Default message")
}

// Launch a bug
// throw new Error("Launch an error")

function sumIntegers(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("It is not a integer")
    }
    return (a + b)
}

console.log(sumIntegers(5, 10))
console.log(sumIntegers("aaa", 10))

