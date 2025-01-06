// Map

// Declaration

let myMap = new Map()
console.log(myMap)

// Initialization

myMap = new Map([
    ["name", "Macarena"],
    ["animal", "Dog"],
    ["age", 6]
])

console.log(myMap)

// Common methods

// set

myMap.set("alias", "Chuchis") // add an element
myMap.set("name", "Maca") // update an element, if the key already exists

console.log(myMap)

// get

console.log(myMap.get("name")) // return the pair value of the key
console.log(myMap.get("nickname")) // return undefined if the key doesnt exist

// has

console.log(myMap.has("name")) // return true if the exists
console.log(myMap.has("nickname")) // returnfalse if the key doesnt exist.

// delete

myMap.delete("alias") // remove an element by its key
console.log(myMap)

// keys, values and entries

console.log(myMap.keys()) // return all the keys from the map
console.log(myMap.values()) // return all the values from the map
console.log(myMap.entries()) // return all the pairs from the map

// size

console.log(myMap.size)

// clear

myMap.clear() // delete all the elements from the map, resetting it to an empty map
console.log(myMap)