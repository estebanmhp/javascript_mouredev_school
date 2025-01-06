// 1. Create an array that stores five animals

let animals = ["Dog", "Cat", "Duck", "Horse", "Cow"]

// 2. Add two more: one at the beginning and one at the end

animals.unshift("Rabbit") // add at the beginning
animals.push("Turtle") // add at the end

console.log(animals)

// 3. Remove the one in the third position

animals.splice(2, 1)
console.log(animals)

// 4. Create a set that stores five books

let books = new Set (["Book1", "Book2", "Book3", "Book4", "Book5"])

// 5. Add two more, one of them repeated

books.add("Book1")
books.add("Book5.1")
console.log(books)

// 6. Remove a specific one of your choice

books.delete("Book3")
console.log(books)

// 7. Create a map that associates the number of the month with its name

let month = new Map([
    [1, "January"],
    [2, "February"],
    [3, "March"],
    [4, "April"],
    [5, "May"],
    [6, "June"],
    [7, "July"],
    [8, "August"],
    [9, "September"],
    [10, "October"],
    [11, "November"],
    [12, "December"]
])

console.log(month)

// 8. Check if month number 5 exists in the map and print its value

console.log(month.has(5))

// 9. Add to the map a key with an array that stores the summer months

month.set("Summer", ["November, December, January"])
console.log(month)

// 10. Create an array, transform it into a set, and store it in a map

let winterArray = ["June", "July", "August"]
let winterSet = new Set(winterArray)
let seasonMap = new Map([
    ["winter", winterSet]
])

let summerSet = new Set(["November", "December", "January"])
let summerArray = Array.from(summerSet)

seasonMap.set("summer", summerArray)

console.log(seasonMap)