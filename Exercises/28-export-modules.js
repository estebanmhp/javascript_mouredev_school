// Export modules
// Node -> package.json)

// Functions 

export function add(a,b) {
    return (a + b)
}

// Variables

export const PI = 3.1416
export let name = "EstebanDev"

// Classes

export class Circle {
    constructor(radius) {
        this.radius = radius
    }
    area() {
        return (Math.PI * Math.pow(this.radius, 2))
    }
}

// Default export (just works for one element)
// It is recommended to do this for functions class objects

export default function substract(a, b) {
    return (a - b)
}