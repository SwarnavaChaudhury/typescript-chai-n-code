
// did not generate new code - just give structue of the object - alternative of [types]
interface Chai {
    flavor: string
    price: number
    milk?: boolean
}

const masala: Chai = {
    flavor: "Masala",
    price: 100
}

console.log("masala => ", masala);


interface Shop {
    readonly id: number
    name: string
}

const s: Shop = {
    id: 101,
    name: "My Chai"
}

// s.id = 202 // error -> bcz id is readonly
console.log("shop =>", s);



// declare function using interface with return types
interface DistanceCalculator {
    (price: number): number // function type
}

// *** Type alias equivalent *** 
// type DistanceCalculator = (price: number) => number;


const apply50: DistanceCalculator = (p) => p * 0.5

console.log("apply50 => ", apply50(200)); // 100


////// can same function type use in diff function here 

const calc: DistanceCalculator = (val) => {
    return val * 10
}
console.log("Calculator => ", calc(10));






// --- Method Signatures in Interfaces ---
// Interfaces can define methods (functions belonging to an object) and their return types (void = returns nothing)
interface TeaMachine {
    start(): void; // Method that takes no arguments and returns nothing
    stop(): void;  // Method that takes no arguments and returns nothing
}

// Object implementation enforcing the TeaMachine contract
// The object MUST implement both 'start' and 'stop' methods matching the signatures
const machine: TeaMachine = {
    start() {
        console.log("Start Machine");
    },
    stop() {
        console.log("Stop Machine");
    }
}

machine.start();
machine.stop();







// defining [index signatures] in interfaces
interface ChaiRatings {
    [flavor: string] : number
}

// index signature => we can access the values using dynamic key
// we can not give number as a key in index signature -> bcz it will give error
// type alias is better than interface
// ** for multiple key with diff types we can use interface

// but [index signature] can't use in interface -> only type alias use
// --> index - as string : value - as number
const ratings : ChaiRatings = {
    masala : 4,
    ginger : 5,
    elaichi : 4.5
}
console.log("Ratings => ", ratings)
// console.log(typeof ratings);







// interface extends or merge 
// ** same name interface is merged (NOT EXTENDS)**

// 1 from library
interface User { 
    name: string
}

// 2. I made
interface User {
    age: number
}
// ** for merge two interface use same name

const myUser : User = {
    name: "John Doe",
    age: 30
}

console.log("myUser => ", myUser)





// marge using extends
interface A { a: string }
interface B { b: string }

interface C extends A, B { c: string }

const c : C = {
    a: "1",
    b: "2",
    c: "3"
}

console.log("c => ", c)




////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
