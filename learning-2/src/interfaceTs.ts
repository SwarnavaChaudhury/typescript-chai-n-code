
type ChaiOrder = { 
    type: string;
    sugar: number;
    strong: boolean;
};

function makeChai( order: ChaiOrder ) {
    console.log(order)
}

// function serveChai( order:{ type: string; sugar: number; strong: boolean } ) {
//     console.log(order)
// }

function serveChai( order: ChaiOrder ) {
    console.log(order)
}




//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////



type TeaRecipe = {
    water: number;
    milk: number;
}
// interface TeaRecipe {
//     water: number;
//     milk: number;
// }

class MasalaChai implements TeaRecipe {
    water = 100;
    milk = 50;
}

// type CupSize = "small" | "medium" | "large";
interface CupSize {
    size: "small" | "medium" | "large";
}

class Chai implements CupSize {
    size: "small" | "medium" | "large" = "large";
}



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// enum === Literal Types
// Literal types ---> in TypeScript restrict a variable to hold an exact, 
// specific value rather than any value within a broader primitive type 
// like string or number.
type TeaType = "masala" | "ginger" | "elaiche" | "plain";

function orderChai( t: TeaType ) {
    console.log(`here is your ${t} chai`);
}

orderChai("masala");



//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////


// mixed types --> or
type BaseChai = { teaLeaves: number }
type Extra = { masala: number }

type MyMasalaChai = BaseChai & Extra;

const cup : MyMasalaChai = {
    teaLeaves : 12,
    masala : 12,
};

// optional properties --> ?
type User = {
    basename: string;
    bio?: string;
}

const u1: User = { basename: "Swarnava" }
const u2: User = { basename: "Chaudhury", bio: "I am a developer" }

// readonly values
type Config = {
    readonly appName : string,
    version: number,
}

const c1 : Config = {
    appName : "Chai",
    version: 1,
}
// c1.appName = "Tea";  // this is not allowed as it is readonly

console.log(c1)


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////