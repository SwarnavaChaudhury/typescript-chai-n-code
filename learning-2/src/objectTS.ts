const chai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

// automatically from top object -> infer -> TS figures out the type of the variable
// {
//     name: string;
//     price: number;
//     isHot: boolean;
// }



// declare type of object
let tea: {
    name: string;
    price: number;
    isHot: boolean;
}
// the variable content here must be same as the type
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
}


////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////


// define the type for reuseable code
type myTea = {
    name: string;
    price: number;
    ingredients: string[],
}

// object should follow the same type
const adrakChai: myTea = {
    name: "Adrak Chai",
    price: 30,
    ingredients: ["tea leaves", "ginger"]
}



//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////



type Cup = {
    size: string
}

let smallCup: Cup = {
    size: "200ml"
}

// satisfy the bare minimum requirement
// excess property doesn't matter -> structural typing -> "material"
let bigCup = {
    size: "500ml",
    material: "steel"
}

smallCup = bigCup

console.log(smallCup)
console.log(bigCup)


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


type Brew = { brewTime: number }
const coffee = { brewTime: 5, beans: "Arabica" }
const chaiBrew: Brew = coffee

console.log(chaiBrew)

type User = {
    username: string;
    password: string;
}

const u: User = {
    username: "swarnava123",
    password: "123"
}


//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


/// *******  Split Data Types
type Item = { name: string, quantity: number }
type Address = { street: string, pin: number }

type Order = {
    id: string;
    item: Item[];
    address: Address;
}

// update partially
type NewChai = {
    name: string;
    price: number;
    isHot: boolean;
}

const updatedChai: (updates: Partial<NewChai>) => void = (updates) => {
    console.log("Updating chai with: ", updates);
}

updatedChai({ price: 25 })
updatedChai({ isHot: false })
updatedChai({}) // it okay to pass empty object because it's Partial<Chai>

// 

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


type ChaiOrder = {
    name?: string; // make this key optional value
    quantity?: number; // make this key optional value
}

const placeOrder = (order: Required<ChaiOrder>) => { // make all the keys required value
    console.log(order)
}

placeOrder({
    name: "New - Masala Chai",
    quantity: 22
})


// 

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


type c_Chai = {
    name: string,
    price: number,
    isHot: boolean,
    ingredients: string[]
}

// Pick utility type constructs a new type by selecting only the specified keys ("name" | "price") from an existing type (c_Chai)
type BasicChaiInfo = Pick<c_Chai, "name" | "price">;

// similar to partial method --> only required the Pick-ed value - under union
const chaiInfo : BasicChaiInfo = {
    name: "Lemon Tea",
    price: 30
}


// 

//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////


type chaiNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string;
}

type PublicChai = Omit<chaiNew, "secretIngredients">;

const publicChai: PublicChai = {
    name: "Masala Chai",
    price: 20,
    isHot: true
}

console.log(publicChai)