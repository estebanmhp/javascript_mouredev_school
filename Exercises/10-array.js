// array

// declaration

let myArray = [] // Recommended
let newArray = new Array()

console.log(myArray)
console.log(newArray)

// initialization

myArray = [1] // one item with value 3
newArray = new Array(1) // one empty space reserved in the memory

console.log(myArray)
console.log(newArray)

myArray = [3] // one item with value 1
newArray = new Array(3) // three empty spaces reserved in the memory

console.log(myArray)
console.log(newArray)

myArray = [1, 2, 3, 4] 
newArray = new Array(1, 2, 3, 4) // looks like both of them do the same

console.log(myArray)
console.log(newArray)

myArray = ["user", "password", "login"] 
newArray = new Array("user", "password", "login") // looks like both of them do the same

console.log(myArray)
console.log(newArray)

myArray = ["name", 22, true] 
newArray = new Array("name", 22, true) // looks like both of them do the same

console.log(myArray)
console.log(newArray)

// Here something change, even if the array is declarated to have just 3 spaces
// this array is able to expand its memory without any specific command, 
// so this way is not recommended

newArray = new Array(3) 
newArray[2] = "Wiwis"
// newArray[0] = "Blank"
newArray[1] = "email"
newArray[4] = "age"

console.log(newArray) 

// It is recommended that the array manage its memory itself

myArray = []
myArray[2] = "Wiwis"
// myArray[0] = "Blank"
myArray[1] = "email"
myArray[4] = "age"

console.log(myArray)

// COMMON METHODS

myArray = []

// push and pop

myArray.push("Macarena") // push introduce a new element in an array
myArray.push("Pet") // push organize elements in an array by its declaration order
myArray.push("Dog")
myArray.push(6)

console.log(myArray)

myArray.pop() // delete the last element in an array and return this element
console.log(myArray)

// shift and unshift

myArray.shift() // delete the first element in an array and return this element
console.log(myArray)

myArray.unshift("Macarena", "Animal") // add one or more elements at the beginnig of an array
console.log(myArray)

// length

console.log(myArray.length)

// clear (delete an array)

myArray = [] // initialize the array again (recommended)
myArray.length = 0 // another way (not recommended)
console.log(myArray)

// slice

myArray = ["Macarena", "Animal", "Pet", "Dog", 6, true]
let newMyArray = myArray.slice(1, 3) // take a section between the parameters of slice

console.log(myArray)
console.log(newMyArray)

// splice

myArray.splice(1, 3)
console.log(myArray) // delete an specific amount of elements (second parameter), starting at the specific index position (first parameter)

myArray = ["Macarena", "Animal", "Pet", "Dog", 6, true]

myArray.splice(1, 2, 8)
console.log(myArray) // delete an specific amount of elements (second parameter), starting at the specific index position (first parameter), after all add one element after the delete one. It's like replace it