// Objects

// Sintax

let person = {
    name: "Mac",
    age: 34,
    alias: "Maca"
}

// Access the properties

// Dot Notation
console.log(person.name)

// Bracket notation
console.log(person["name"])

// Modify the properties

person.name = "Mac Smith"
console.log(person.name)

console.log(typeof person.age)
person.age = "34"
console.log(person.age)
console.log(typeof person.age)

// Delete a propertie

delete person.alias
console.log(person)

// Add a propertie

person.email = "macsmith@example.com"
person["alias"] = "Maca"
console.log(person)

// Methods 
// Functions

let person2 = {
    name: "Jane",
    age: 30,
    alias: "Jay",
    walk: function () {
        console.log("This person could go")
    }
}

person2.walk()

// Nesting

let person3 = {
    name: "Caleb",
    age: 28,
    alias: "Cal",
    walk: function () {
        console.log("This person could go")
    },
    job: {
        name: "Software Developer",
        exp: 5,
        work: function () {
            console.log(`This person has ${this.exp} years of experience`)
        }
    }
}

console.log(person3)
console.log(person3.name)
console.log(person3.job)
console.log(person3.job.name)
person3.job.work()

// Object equality

let person4 = {
    name: "Mac Smith",
    age: 34,
    email: "macsmith@example.com",
    alias: "Maca"
}

console.log(person)
console.log(person4)

console.log(person == person4) // false because objects are reference to its address memory
console.log(person === person4) // false, it doesnt matter if they look similar, they have different memory address

console.log(person.name == person4.name) // true because the object properties are not reference they are real values

// Iteration

// Getting the keys

for (let key in person4) {
    console.log(key)
}

// Getting the values

for (let value in person4) {
    console.log(value + ": " + person4[value])
}

// Functions like objetcs

function funPerson(name, age) {
    this.name = name
    this.age = age
}

let person5 = new funPerson("Brais", 37)
console.log(person5)
console.log(typeof person5)
