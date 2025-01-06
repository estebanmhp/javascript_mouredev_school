// 1. Create a loop that prints the numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    console.log(`Number: ${i}`)
}

let i = 1
while (i <= 20) {
    console.log(`Number: ${i}`)
    i++
}

// 2. Create a loop that adds all the numbers from 1 to 100 and shows the result

let result = 0

for (let i = 1; i <= 100; i++) {
    result += i
    if (i == 100) {
        console.log (result)
        break
    }
}

i = 1
result = 0
while (i <= 100) {
    result += i
    i++
}
console.log (result)

// 3. Create a loop that prints all even numbers between 1 and 50

for (let i = 1; i <= 50; i++) {
    if (i % 2 == 0) {
        console.log(`Number: ${i}`)
    }
}

i = 1
while (i <= 50) {
    if (i % 2 == 0) {
        console.log(`Number: ${i}`)
    }
    i++    
}

// 4. Given an array of names, use a loop to print each name to the console

let names = ["John", "Jane", "Alice", "Bob", "Charlie", "Eve"]

for (let i = 0; i < names.length; i++) {
    console.log(`Name: ${names[i]}`)
}

i = 0
while (i < names.length) {
    console.log(`Name: ${names[i]}`)
    i++
}

// 5. Write a loop that counts the number of vowels in a string

let myString = "JavaScript COURSE"
let amount = 0

for (let i = 0; i < myString.length; i++) {
    if (myString[i] == 'a' || myString[i] == 'e' || myString[i] == 'i' || myString[i] == 'o' || myString[i] == 'u') {
        amount++
    } else if (myString[i] == 'A' || myString[i] == 'E' || myString[i] == 'I' || myString[i] == 'O' || myString[i] == 'U') {
        amount++
    }
}
console.log(`Number of vowels: ${amount}`)

amount = 0
i = 0

let vowels = "aeiouAEIOU"

while ( i < myString.length) {
    if (vowels.includes(myString[i])) {
        amount++
    }
    i++
}
console.log(`Number of vowels: ${amount}`)

// 6. Given an array of numbers, use a loop to multiply all the numbers and show the product

let numbers = [12, 7, 2, 5]
result = 1

for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i]
}
console.log(`Result: ${result}`)

i = 0
result = 1

while (i < numbers.length) {
    result *= numbers[i]
    i++
}
console.log(`Result: ${result}`)

// 7. Write a loop that prints the multiplication table of 5

for (let i = 1; i <= 10; i++) {
    result = i * 5
    console.log(`5 * ${i} = ${result}`)
}

i = 1

while (i <= 10) {
    result = i * 5
    console.log(`5 * ${i} = ${result}`)
    i++
}

// 8. Use a loop to reverse a string

let normalString = "String to be reverse"
let reverseString = ""

for (let i = (normalString.length - 1); i >= 0; i--) {
    reverseString += normalString[i]    
}
console.log(reverseString)

i = (normalString.length - 1)
reverseString = ""

while (i >= 0) {
    reverseString += normalString[i] 
    i--
}
console.log(reverseString)

// 9. Use a loop to generate the first 10 numbers of the Fibonacci sequence

let n1 = 0
let n2 = 1

for (let i = 1; i <= 10; i++) {
    if (i == 1) {
      console.log(`Fibonacci number (${i}) = ${n1}`)
    } else if (i == 2) {
      console.log(`Fibonacci number (${i}) = ${n2}`)
    } else {
      let n3 = n1 + n2
      n1 = n2
      n2 = n3
      console.log(`Fibonacci number (${i}) = ${n3}`)
    }
}

n1 = 0
n2 = 1
i = 1

while (i <= 10) {
    if (i == 1) {
        console.log(`Fibonacci number (${i}) = ${n1}`)
    } else if (i == 2) {
        console.log(`Fibonacci number (${i}) = ${n2}`)
    } else {
        let n3 = n1 + n2
        n1 = n2
        n2 = n3
        console.log(`Fibonacci number (${i}) = ${n3}`)
    }
    i++
}

// 10. Given an array of numbers, use a loop to create a new array that contains only the numbers greater than 10

let numbers2 = [12, 5, 7, 23, 56, 9, 34, 0, 21, 65]
let copyNumbers2 = []

for (let i = 0; i < numbers2.length; i++) {
    if (numbers2[i] > 10) {
        copyNumbers2.push(numbers2[i])
    }
}
console.log(copyNumbers2)

i = 0
copyNumbers2 = []

while (i < numbers2.length) {
    if (numbers2[i] > 10) {
        copyNumbers2.push(numbers2[i])
    }   
    i++ 
}
console.log(copyNumbers2)