let numbers = [1, 2, 3, 4] 

let person = {
    name: "Caleb",
    age: 28,
    alias: "Cal",
    phone: 3124524769,
    walk: function () {
        console.log("This person could go")
    },
    job: {
        name: "Software Developer",
        exp: 5,
        email: "calebjob@developer.com",
        company: "Developers company",
        work: function () {
            console.log(`This person has ${this.exp} years of experience`)
        }
    }
}

// 1. Use destructuring to extract the first two elements of an array

let [number0, number1] = numbers
console.log(number0)
console.log(number1)

// 2. Use destructuring on an array and assign a default value to a variable

let [, , number2, number3, number4 = "Default value"] = numbers
console.log(number2)
console.log(number3)
console.log(number4)

// 3. Use destructuring to extract two properties from an object

let {alias, age} = person
console.log(alias)
console.log(age)

// 4. Use destructuring to extract two properties from an object and assign them
//    to new variables with different names

let {name:givenName, phone:mobile} = person
console.log(givenName)
console.log(mobile)

// 5. Use destructuring to extract two properties from a nested object

let {job: {email, company}} = person
console.log(email)
console.log(company)

// 6. Use spreading to combine two arrays into a new one

let negative = [-1, -2, -3, -4]
let allNumbers = [...numbers, ...negative]
console.log(allNumbers)

// 7. Use spreading to create a copy of an array

let copyAll = [...allNumbers]
console.log(copyAll)

// 8. Use spreading to combine two objects into a new one

let pet = {
    name: "Macarena",
    age: 6,
    animal: "Dog"    
}

let combine = {...pet, ...person}
console.log(combine)

// 9. Use spreading to create a copy of an object

let copy = {...combine}
console.log(copy)

// 10. Combine destructuring and spreading

// Arrays
// Destructuring (value0, value1, value2, value 3 = ...numbers)
// Spreading (...valueNegatives = ...negative, -5, -6)


let [value0, value1, value2, value3, ...valueNegatives] = [...numbers, ...negative, -5, -6] 
console.log(value0)
console.log(value1)
console.log(value2)
console.log(value3)
console.log(valueNegatives)

// Objetcs
// Destructuring (name:namePet, age:agePet, animal:animalPet = ...pet)
// Spreading (...personCopy = ...person, address: "P. Sherman, 42 Wallaby Way, Sidney") Ignore name and age, or any property with the same name because they have already been assigned

let {name:namePet, age:agePet, animal:animalPet, ...personCopy} = { ...person, address: "P. Sherman, 42 Wallaby Way, Sidney", ...pet}
console.log(namePet)
console.log(agePet)
console.log(animalPet)
console.log(personCopy)