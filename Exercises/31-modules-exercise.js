// 1. Export a function

export function multiply(a, b) {
    return (a * b)
}

// 2. Export a constant

export const euler = 2.71828

// 3. Export a class

export class Square {
    constructor (side) {
        this.side = side
    }
    area() {
        return (this.side * this.side)
    }
}

// 4. Import a function

import { add } from "./28-export-modules.js";

console.log(add(4, 2))

// 5. Import a constant

import { PI } from "./28-export-modules.js";

console.log(PI)

// 6. Import a class

import { Circle } from "./28-export-modules.js";

let exampleCircle = new Circle(10)

console.log(Circle)
console.log(exampleCircle)
console.log(typeof exampleCircle)


// 7. Export a function, a constant, and a class as default (if allowed)

export default function divide (a, b) {
    if (a > b) {
        return b / a
    } else {
        return a / b
    }
} 

// Default allows just one element per file

// 8. Import a function, a constant, and a class as default (if allowed)

import substract from "./28-export-modules.js"; 

// 9. Export a function, a constant, and a class from a folder

import { funExample, constExample, classExample } from "./javascript_mouredev_school/export_examples";

// 10. Import a function, a constant, and a class from a directory different from the previous one

import { funExample2, constExample2, classExample2 } from "/home/estebanmhp/Tecnologo_Monterrey_web_basica/js_export";