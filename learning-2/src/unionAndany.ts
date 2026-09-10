let subs : number | string = 1000
subs = "1000" // valid assignment because subs is of type number | string
// subs = true // invalid assignment, TypeScript will throw an error because subs is of type number | string

let apiRequestStatus: "success" | "failure" | "pending" = "pending"
apiRequestStatus = "success" // valid assignment
apiRequestStatus = "failure" // valid assignment
// apiRequestStatus = "error" // invalid assignment, TypeScript will throw an error because apiRequestStatus is of type "success" | "failure" | "pending"
console.log(apiRequestStatus);


let airlineSeat : 'aisle' | 'window' | 'middle' = 'window'
airlineSeat = 'aisle' // valid assignment
// airlineSeat = 'front' // invalid assignment, TypeScript will throw an error because airlineSeat is of type 'aisle' | 'window' | 'middle'
console.log(airlineSeat);









const orders = ["12", "34", "56", "78", "90"]

let currentOrder : string | undefined; // --> union type, currentOrder can be of type string or undefined

// let currentOrder : any // try to avoid this datatype: any

for( let order of orders ){
    if( order === "56" ){
        currentOrder = order
        break
    }
}

console.log(currentOrder) // valid assignment, currentOrder is of type string