// Classes 

class Person {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Ruth", 67, "Ruchis")

console.log(person)
console.log(typeof person) // This is an object

// Default values

class DefaultPerson {
    constructor(name = "No name", age = "No age", alias = "No alias") {
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let defaultPerson = new DefaultPerson("Vivian", 27)
console.log(defaultPerson) // undefined if the property doesnt have a default value

// Accessing properties

console.log(defaultPerson.alias)
console.log(defaultPerson["alias"])

defaultPerson.alias = "Wiwis"
console.log(defaultPerson.alias)

// Classes with functions

class PersonWithMethod {
    constructor(name, age, alias) {
        this.name = name
        this.age = age
        this.alias = alias
    }
    walk() {
        console.log("This person walks")
    }
}

let personMethod = new PersonWithMethod("Andrew", 36, "Andy")
console.log(personMethod)
personMethod.walk()

// Private propeties

class PrivatePerson {

    #bank
    
    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }
}

let privatePerson = new PrivatePerson("Jhon", 45, "J", "JH04023094094N")
console.log(privatePerson.bank) // Don't allow to access, prints undefinend

privatePerson.bank = "4545420320654JHN"
console.log(privatePerson) // Don't modify the private property, just creat a new one which is public

// Get and Set

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }

    get name() {
        return (this.#name)
    }
    set bank(update) {
        this.#bank = update
    }
    // get bank() {
    //     return (this.#bank)
    // }
}

let getSetPerson = new GetSetPerson("Louis", 21, "Lu", "L120O09US")

console.log(getSetPerson) // Dont print anything because everything is private
console.log(getSetPerson.name) // Prints just the name because the class is using get, just read, dont allow to modify

getSetPerson.bank = "031093LS"
console.log(getSetPerson.bank) // Prints undefined because the class is using set, just read, dont allow to read

// Inheritance

class Animal {
    constructor (name) {
        this.name = name
    }

    sound() {
        console.log("This animal makes a sound")
    }
}

class Dog extends Animal{
    constructor(name, size) {
        super(name) // Call the property of its super class
        this.size = size
    }
    run() {
        console.log("This dog runs")
    }        
    sound() {
        console.log("Woof!")    
    } // Overwrite the function, it doesnt matter that the function has tha same name
}

let myDog = new Dog("Luna", 15)
myDog.sound()
myDog.run()
console.log(myDog)

// Static methods
// Allows to call and use the class without instances of it

class MathOperation {
    static sum(a, b) {
        return (a + b)
    }
}

console.log(MathOperation.sum(5, 10))