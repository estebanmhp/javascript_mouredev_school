// Desctructuring

// Arrays

let myArray = [1, 2, 3, 4]

let [value0, value1, value2, value3, value4] = myArray

console.log(value0, value1, value2, value3, value4)

// Arrays with default values

let [value5, value6, value7, value8 = 0, value9 = 0] = myArray 
console.log(value5, value6, value7, value8, value9);

// Ignore elements in an array

let [value10, , ,value13] = myArray 
console.log(value10, value13);

// Objects

let person = {
    name: "Macarena",
    age: 34,
    alias: "Maca"
}

let {name, age, alias} = person
console.log(name, age, alias)

// Objects with default values

let {name2, age2, alias2, owner = "Ruth"} = person
console.log(name2, age2, alias2, owner) // undefined if the name of the variable is not the same as the object property name.

// Object with new names for its variables

let {name:name3, age:age3, alias:alias3} = person
console.log(name3, age3, alias3)

// Nested objects

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

let {name: name4, job: {name:jobName, exp}} = person3
console.log(name4, jobName)

// Spreading

// Arrays

let myArray2 = [...myArray]
console.log(myArray2)

let myArray3 = [...myArray, 5, 6, 7]
console.log(myArray3)

// Combining arrays

let myArray4 = [...myArray2, ...myArray3]
console.log(myArray4)

// Objects

let person4 = {...person, email: "mac@example.com"}
console.log(person4)
