// 1. Concatenate two strings
let pet = "a dog"
let petName = "Macarena is "
let message = petName + pet
console.log (message)

// 2. Display the length of a string
console.log("The length of the string is ", message.length)

// 3. Display the first and last character of a string
console.log("Frst character:", message[0], "\nLast character:", message[16])

// 4. Convert a string to uppercase and lowercase
console.log("Convert to uppercase:", message.toUpperCase())
console.log("Convert to lowercase:", message.toLowerCase())

// 5. Create a string with multiple lines
let multiline = `Macarena
is not just a dog
is part of the family`
console.log(multiline)

// 6. Interpolate the value of a variable into a string
console.log(`This is an example of an interpolation sting: ${petName} ${pet}. However \n${multiline}`)

// 7. Replace all spaces in a string with hyphens
console.log(message.replaceAll(" ", "-"))

// 8. Check if a string contains a specific word
console.log(message.includes("dog"))
console.log(message.includes("animal"))

// 9. Check if two strings are equal
console.log(pet == petName)
console.log(pet == "a dog")

// 10. Check if two strings have the same length
console.log(message.length == petName.length)
console.log(message.length == 17)