

const chaiFlavour: string[] = ["Masala", "Ginger", "Lemon"]; // --> can not add numeric
const chaiPrice: number[] = [20, 25, 30]; // --> can not add string


// chaiPrice.push("Free"); // --> error because we mentioned the return value is number[]


const rating: Array<number> = [4.5, 5.0] // // // Same as -> number[]

type Chai = {
    name: string;
    price: number;
}

// array of object
const menu: Chai[] = [
    { name: "Masala", price: 15 },
    { name: "Adrak", price: 20 },
    { name: "Lemon", price: 25 },
    //{name : "", price : "100"} // --> ERROR because price is number but we are giving string
]

menu.push({ name: "", price: 100 })
console.log(menu)


// read only array
const user: ReadonlyArray<string> = ["John", "Doe", "Smith"];

const cities: readonly string[] = ["Delhi", "Jaipur", "Kolkata"]
// cities.push("Mumbai"); // --> shows error because readonly
console.log(cities);


// multi dimentional array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

table.push([10, 11, 12])
console.log(table)



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


// Tuple
let chaiTuple: [string, number] = ["Masala", 20]

chaiTuple = ["Ginger", 45]

// chaiTuple = [ 25, "Masala" ] 
// --> error because we mentioned the return value is [ string, number ] but we are giving [ number, string ]
console.log(chaiTuple)


// Array of tuple
let chaiArray: [string, number][] = [["Masala", 20], ["Ginger", 45]]

chaiArray.push(["Lemon", 25])
console.log(chaiArray)



let userinfo: [string, number, boolean?] = ["John", 25, true] // 1st and 2nd are mandatory, 3rd is optional
// userinfo.push(["Jane", 30, false]) // --> error
userinfo = ["John", 25] // --> works because 3rd is optional
// userinfo = ["John", 25, true, "hello"] // --> error because we are adding 4th element which is not in tuple
userinfo = ["Martin", 30, false]
userinfo.push("Doe", 25, true);
console.log(userinfo)

let userId: [string, number, boolean] = ["John", 25, true] // all are mandatory
// userId.push(["Jane", 30, false]) // --> error because 3rd is mandatory
// userId.push(["John", 25]) // --> error because 3rd is mandatory
console.log(userId)



// Readonly Tuple
const location: readonly [number, number] = [28.66, 35.44]

// location.push(1203456789); // --> error
console.log(location)



/// named tuple
const chaiItems: [name: string, price: number]
    = ["Masala", 20]
console.log(chaiItems)






///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////



// // enum
enum cupSize {
    SMALL,
    MEDIUM,
    LARGE,
    EXTRA_LARGE
}

const size = cupSize.MEDIUM
console.log( size )


// Incremental value assignment in enums ( )
enum Status {
    PENDING = 100,
    SERVED,
    CANCELLED
}

console.log(Status.PENDING)  // 100
console.log(Status.SERVED)   // 101
console.log(Status.CANCELLED) // 102


enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger",
    LEMON = "lemon",
    CARADOM = "cardamom"
}

function makeChai(type: ChaiType) {
    console.log(` Making: ${type} `)
}

makeChai(ChaiType.GINGER)
// makeChai("masala") 
// --> error because we mentioned the return value is ChaiType but we are giving string






/// ------ Heterogeneous Values ---------
/// a collection of data points, elements, or quantities that are diverse, dissimilar, or not uniform. Instead of sharing the same type, range, or traits, these values come from mixed sources or represent widely different kinds of measurements.

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

const enum Sugars {
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3
}
const s = Sugars.MEDIUM