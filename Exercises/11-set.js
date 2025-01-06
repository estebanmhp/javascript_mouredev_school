// Set

// Declaration

let mySet = new Set()
let mySet2 = {} // This is not a set, even if look like an empty set

console.log(mySet)
console.log(mySet2)

// Initialization

mySet = new Set(["Macarena", "Animal", "Pet", "Dog", 6, true]) 
console.log(mySet)

// Common methods

// add and delete

mySet.add("https://macarena.com") // adds a new element at the end
console.log(mySet)

mySet.delete("https://macarena.com") // deletes a element by its specific value, it wouldnt work with the index position.
console.log(mySet.delete(true))// returns true if the element exists and it was removed, false if not
console.log(mySet)

// has

console.log(mySet.has("Macarena")) // returns true if the element existis
console.log(mySet.has(true)) // returns false if the element doesnt exist

// size

console.log(mySet.size)

// convert a set to an array

let myArray = Array.from(mySet)
console.log(myArray)

// convert an array to a set

mySet = new Set(myArray)
console.log(mySet)

// difference with an array

mySet.add("Macarena") // it is not possible to add any element if this already exists
mySet.add("animal") // it is case sensitve
console.log(mySet)