// 1. Create an object with 3 properties

let pet = {
    name: "Macarena",
    age: 6,
    animal: "Dog"
}

console.log(typeof pet)
console.log(pet)

// 2. Access and display its value

console.log(pet.name)
console.log(pet.age)
console.log(pet.animal)

// 3. Add a new property

pet.sex = "Female"
pet["Color"] = "Black and yellow"
console.log(pet)

// 4. Remove one of the first 3 properties

delete pet.animal
console.log(pet)

// 5. Add a function and invoke it

let feeling = "happy"

pet.play = function(feel) {
    if(feel == "happy") {
        console.log(`${this.name} want to play`)
    } else {
        console.log(`${this.name} doesnt want to play`)
    }
}

pet.play(feeling)

// 6. Iterate through the object's properties

console.log("The object contains:")

for (let value in pet) {
    console.log(value + ": " + pet[value])
}

// 7. Create a nested object

pet.owner = {
    name: "Vivian",
    phone: 30142418,
    email: "vivian@email.com"
}

console.log(typeof pet.owner) 
console.log(pet)

// 8. Access and display the value of the nested properties

console.log(pet.owner.name)
console.log(pet.owner.phone)
console.log(pet.owner.email)

// 9. Check if the two created objects are equal

let pet2 = {
    name: "Felix",
    age: 3,
    animal: "Cat"
}

let pet3 = {
    name: "Bunny",
    age: 3,
    animal: "Cat"
}

console.log(pet2 == pet3) // always false
console.log(pet2.name == pet3.name) // false the values are different
console.log(pet2.age == pet3.age) // true the values are the same
console.log(pet2.animal == pet3.animal) // true the values are the same

// 10. Check if two different properties are equal

pet2.owner = "Wiwis"
pet2.color = "White"

pet3.owner = "Mapis"
pet3.color = "White"

console.log(pet2.owner == pet3.owner) // false same property different value
console.log(pet2.color == pet3.color) // true same property same value