// 1. Create a function that receives two numbers and returns their sum

function sum(a,b) {
    return (a + b)
}

console.log(sum(4, 8))

let arrowSum = (a, b) => {return(a + b)}
console.log(arrowSum(4, 8))

// 2. Create a function that receives an array of numbers and returns the largest one

let numbers = [2, 8, 45, 86, 30]

function largest (arrNumbers) {
    let large = 0
    for(let i = 0; i < arrNumbers.length; i++) {
        if (large < arrNumbers[i]) {
            large = arrNumbers[i]
        }
    }
    return (large)
}

console.log(largest(numbers))

let large = function (arrNumbers) {
    let compare = 0
    for(let i = 0; i < arrNumbers.length; i++) {
        if (compare < arrNumbers[i]) {
            compare = arrNumbers[i]
        }
    }
    return (compare)    
}

console.log(large(numbers))


// 3. Create a function that receives a string and returns the number of vowels it contains

let message = "This is a test"

function count(str) {
    let amount = 0
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            amount++
        }
    }
    return (amount)
}

console.log(`The amount of vowels in the message (${message}) is: ${count(message)}`)

// 4. Create a function that receives an array of strings and returns a new array with the strings in uppercase

let fruits = ["apple", "banana", "orange", "watermelon"]

function newArray(arrStr) {
    let upper = []
    for (let i = 0; i < arrStr.length; i++) {
        upper.push(arrStr[i] = arrStr[i].toUpperCase())
    }
    return (upper)
}

console.log(fruits)
console.log(newArray(fruits))

// 5. Create a function that receives a number and returns true if it is prime, and false otherwise

let num = 7 

function prime(numb) {
    if (numb <= 1) {
        return (false)
    }
    for (let i = 2; i < numb; i++) {
        if (numb % i == 0) {
            return (false)
        }
    }
    return (true)
}

console.log(prime(num))

num = 15
console.log(prime(num))

// 6. Create a function that receives two arrays and returns a new array that contains the common elements between both

let array1 = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let array2 = ["Eve", "Frank", "Grace", "Charlie", "Helen", "Jane", "Kayle"];

function commonArray(arr1, arr2) {
    let common = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                common.push(arr1[i])
            }
        }
    }
    return (common)
}

console.log(commonArray(array1, array2))

function commonArray2(arr1, arr2) {
    let common = []
    let set1 = new Set(arr1)
    for (let i = 0; i < arr2.length; i++) {
        if(set1.has(arr2[i])) {
            common.push(arr2[i])
        }
    }
    return (common)
}

console.log(commonArray2(array1, array2))

// 7. Create a function that receives an array of numbers and returns the sum of all even numbers

let numbers2 = [12, 45, 7, 23, 56, 89, 34, 90, 21, 65]

function sumEven(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result += arr[i]
        }
    }
    return (result)
}

console.log(sumEven(numbers2))

// 8. Create a function that receives an array of numbers and returns a new array with each number squared

let numbers3 = [3, 8, 1, 6, 10];

function squar(arr) {
    let numberSquar = []
    for (let i = 0; i < arr.length; i++) {
        let result = arr[i] ** 2
        numberSquar.push(result)
    }
    return (numberSquar)
}

console.log(squar(numbers3))

// 9. Create a function that receives a string and returns the same string with the words in reverse order

let message2 = "This is a test"

function reverseString(str) {
    let strArray = str.split(" ")
    strArray.reverse ()
    str = strArray.join(" ")
    return (str)
}

console.log(reverseString(message2))

function reverseString2(str) {
    let strArray = str.split(" ")
    let temp = []
    for (let i = strArray.length - 1; i >= 0 ; i--) {
        temp.push(strArray[i])
    }
    str = temp.join(" ")
    return (str)
}

console.log(reverseString2(message2))

// 10. Create a function that calculates the factorial of a given number

let number = 10

function factorial(num) {
    if (num < 0) {
        console.log("The number must be positive, equal to 0 or higher")
        return (`Not accepted: ${num}`)
    } else if (num == 0) {
        return (1)
    } else {
        let result = 1
        for (let i = 1; i <= num; i++) {
            result *= i
        }
        return (result)
    }
}

console.log(factorial(number))