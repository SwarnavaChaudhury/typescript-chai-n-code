// forceful type assertion
let response: any = "42";

// avoid -> Number("42") --> typescript did not allowed

let numericLength: number = (response as string).length

console.log(numericLength)


// =========================================
// =========================================
// =========================================
// =========================================


type Book = {
    name: string
}

let bookString = '{"name" : "Harry Poter"}';
// let bookObject = JSON.parse(bookString)
// console.log(bookObject) // --> un-confirm
// console.log(typeof bookObject)
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject) // --> confirm object
console.log(typeof bookObject)



// =========================================
// =========================================
// =========================================
// =========================================


const inputElement = document.getElementById("username") as HTMLInputElement


// =========================================
// =========================================
// =========================================
// =========================================


// let value: any

// value = "chai"
// value = [1, 2, 3]
// value = 2.5
// value.toUpperCase()

let newValue: unknown

newValue = "chai"
newValue = [1, 2, 3]
newValue = 2.5
// newValue.toUpperCase()

// to avoid error use guard
if (typeof newValue === "string") {
    newValue.toUpperCase()
}



// =========================================
// =========================================
// =========================================
// =========================================


try {

}
// catch (error: any) {
//     console.log(error.message)
// }
catch (error) {
    if (error instanceof Error) {    // check error is a instance of Error class
        console.log(error.message)
    }

    console.log("Error is: ", error);
}



// =========================================
// =========================================
// =========================================
// =========================================


// const data: unknown = "Hello World!"
// const strData : string = data /// --> gives the error because of unknown data type

const data: unknown = "Hello World!"
const strData: string = data as string
console.log(strData);
console.log(strData.toUpperCase());



// =========================================
// =========================================
// =========================================
// =========================================


type Role = "superadmin" | "admin" | "user" | "guest" | "teacher"

function redirectBasedOnRole(role: Role): void {
    if (role === "admin") {
        console.log("Redirecting to Admin Dashboard...");
        return;
    }
    if (role === "user") {
        console.log("Redirecting to User Dashboard...");
        return;
    }
    if (role === "guest") {
        console.log("Redirecting to Login page...");
        return;
    }

    role; // show output on hover
    console.log(typeof role)
    // if no one data type handle is left then finally here it shows -> data type : "never"
    // if any or some data type handle is left then show them here -> data type : "superadmin" - and those which is left
}

console.log("Role: ", redirectBasedOnRole("admin"))
console.log("Role: ", redirectBasedOnRole("teacher"))



// =========================================
// =========================================
// =========================================
// =========================================

// return nothing and 
// use case : basically used in server which runs at a constantly round and round and if request received then do the operation
function neverReturn() : never {
    while(true){}
}


