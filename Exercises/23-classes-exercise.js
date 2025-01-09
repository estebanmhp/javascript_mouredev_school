// 1. Create a class that receives two properties

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

let user1 = new User("Sebas", 41)

// 2. Add a method to the class that uses the properties

User.prototype.info = function() {
    console.log(`User information: ${this.name}, ${this.age} years old.`)
}


// 3. Display the values of the properties and invoke the function

console.log(user1.name)
console.log(user1.age)
user1.info()

// 4. Add a static method to the first class

User.greet = function() {
    console.log("Welcome, please enter your information to start")
}

// 5. Make use of the static method

User.greet()

// 6. Create a class that uses inheritance

class UserDetails extends User {
    constructor(name, age, email, gender) {
        super(name, age)
        this.email = email
        this.gender = gender
    }
}

let user2 = new UserDetails("Sara", 14, "sara@example.com", "Female")

console.log(user2)

// 7. Create a class that uses getters and setters

class BankDetails {

    constructor(name, phone) {
        this.name = name
        this.phone = phone
    }
    // get name() {
    //     return (this.name)
    // }
    // set phone(newPhone) {
    //     this.phone = newPhone
    // }
}

// 8. Modify the class with getters and setters to use private properties

class BankDetailsPrivate {

    #account
    #password

    constructor(name, phone, account, password) {
        this.name = name
        this.phone = phone
        this.#account = account
        this.#password = password
    }
    // get name() {
    //     return (this.name)
    // }
    // set phone(newPhone) {
    //     this.phone = newPhone
    // }
    get account() {
        return (this.#account)
    }
    set password(newPassword) {
        this.#password = newPassword
    }
}


// 9. Use the getters and setters and display their values

let bankUser1 = new BankDetailsPrivate("Sebastian", 315648926, "SEBAS1234", "S31094032S")

console.log(bankUser1)
console.log(bankUser1.account) // Allows to read, dont allow to modify

bankUser1.password = "00SBS18448" // Allows to modify the property
console.log(bankUser1.password) // Dont allow to read the property, so it would print undefined because it is a private property

// 10. Override a method of a class that uses inheritance

user2.info()

UserDetails.prototype.info = function() {
    console.log(`Welcome ${this.name}, your details are:\n${this.age} years old\n${this.email}\n${this.gender}`)
}

user2.info()