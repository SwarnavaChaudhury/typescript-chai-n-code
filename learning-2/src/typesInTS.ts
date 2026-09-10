let drink = "World"

// cups : number -> inference
let cups = Math.random() > 0.5 ? 10 : 5

let channelName = "TypeScript"
// channelName = 121252 // invalid assignment, TypeScript will throw an error because channelName is inferred to be of type string


// Annotations types
let drink_flovour: string = "Vanilla" // inferred to be of type string
drink_flovour = "Chocolate" // valid assignment
// drink_flovour = 123 // invalid assignment, TypeScript will throw an error because drink_flovour is of type string


let menuOrder: string
let menuPrice: number
let menuAvailable: boolean
let menuItems: string[]
let menuDetails: [string, number, boolean] // tuple type