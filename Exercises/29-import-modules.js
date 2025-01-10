// Import modules
// import { name_element } from "path";

// Functions

import { add } from "./28-export-modules.js";

console.log(add(5, 10))

// Variables

import { PI,name } from "./28-export-modules.js";

console.log(PI)
console.log(name)

// Classes

import { Circle } from "./28-export-modules.js";

let circle = new Circle(5)
console.log(circle)
console.log(circle.area().toFixed(2))

// Default export (just works for one element)
// It is recommended to do this for functions class objects

import substract from "./28-export-modules.js";

console.log(substract(5, 10))