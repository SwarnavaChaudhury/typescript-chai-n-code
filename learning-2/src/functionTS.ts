function makeChai(type: string, cups: number): void {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeChai("Masala", 2);

const addTwoNumber = (n1: number, n2: number): number => {
    return n1 + n2;
}

console.log(addTwoNumber(1, 2));


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


function getChaiPrice(): number { /// mentioned the return value data-types
    return 30;
}

console.log(getChaiPrice());


// functions parameters can be optional
function makeNewChai(type: string, cups: number = 1): void {
    console.log(`Making ${cups} cups of ${type} chai`);
}

makeNewChai("Masala");


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


function makeOrder(order: string) {
    if (!order) return "Your order is empty";
    return "Order confirmed";
}

console.log(makeOrder("Masala"));



// logger function
function logChai(): void {
    console.log("Chai is ready!")
}



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// optional datatype 
function orderChai(type?: string) {
    if (type) {
        console.log(`Your order is ${type} chai`);
        return;
    }
    console.log("Your order is empty");
}

orderChai("Masala");
orderChai();


// give parameter default value
function orderMyChai(type: string = "Masala") {
    if (!type) {
        console.log(`Your order is ${type} chai`);
        return;
    }
    console.log("Your order is empty");
}

orderMyChai("Ginger");
orderMyChai();



//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////


// complex object method parameter
function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number {

    return 4;

}

console.log(createChai({
    type: "Masala",
    sugar: 2,
    size: "small"
}))