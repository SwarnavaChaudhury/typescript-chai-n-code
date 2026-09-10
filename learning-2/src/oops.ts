

class Chai {
    flavour: string;
    price: number;

    // need to mentioned the constructor
    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price
        console.log(this)
    }

}

// const masalaChai = new Chai();
// masalaChai.flavour = "masala";

const masalaChai = new Chai("My Masala Chai", 150);

console.log(masalaChai);


///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////



// Access Modifier

class MyChai {

    public flavour: string = "Masala";
    private secretIngredients = "Cardamom"; // private variable -> we cannot access it directly

    reveal() { // public method -> by using this we can access private variable
        return this.secretIngredients;
    }

}

const c = new MyChai()
console.log(c.flavour)
console.log(c.reveal());



//////////////  protected -> staff door entry --> can access in there own or there child-class 

class Shop {
    protected ShopName = "Chai Corner 247"
}
class Branch extends Shop {
    getShopName() {
        return this.ShopName
    }
}

const b = new Branch()
console.log(b.getShopName());



//// private variable with different syntax
class Wallet {
    #balance = 100

    getBalance() {
        return this.#balance;
    }
}

const w = new Wallet()
console.log("Wallet Balance: ", w.getBalance());




////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// readonly property --> we can intialise only once 

class Cup {
    readonly capacity: number = 250

    constructor(capacity: number) {
        this.capacity = capacity  // we can intialise only once 
    }
}


const myCup = new Cup(300);
// myCup.capacity = 400  // error -> bcz capacity is readonly
console.log("Cup Capacity: ", myCup.capacity);



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// controlled gates --> getters and setters

class ModernChai {

    private _sugar = 2

    get sugar() {
        return this._sugar
    }

    set sugar(val: number) {
        if (val >= 5) {
            throw new Error("Too much sugar!")
        }
        this._sugar = val
    }

}

const chai = new ModernChai()
console.log("Default Value: ", chai.sugar);    // getter
chai.sugar = 3             // setter
console.log("Set Value: ", chai.sugar);    // getter
// chai.sugar = 10            // error -->  bcz of setter




////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// static --> we cannot access directly

class EkChai {

    static ShopName = "MyChai Cafe 365";

    flavour: string;
    constructor(flavour: string) {
        this.flavour = flavour;
        this.flavour = "new flavour";
    }
}

console.log("Static Shop Name: ", EkChai.ShopName); // static variable only can access directly via class name
const chai1 = new EkChai("Ginger Chai");
console.log(chai1.flavour);

EkChai.ShopName = "new Cate Cafe 889";
console.log("Static Shop name Updated: ", EkChai.ShopName);



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////



// abstract class --> we cannot create object directly --> error

// abstract class Drink {
//     abstract make(): void
// }

// class MyDrink extends Drink {
//     make(): void {
//         console.log("My Drink is Ready!")
//     }
// }

// const drink = new MyDrink()
// console.log("Drink Value => ", drink.make())

abstract class Drink {
    abstract make(): string;
}

class MyDrink extends Drink {
    make(): string {
        return "My Drink is Ready!";
    }
}

const drink = new MyDrink();
console.log("Drink Value => ", drink.make());
// Outputs: Drink Value =>  My Drink is Ready!



////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


// composition --> 

// class Heater {
//     heat() { }
// }

// class ChaiMaker {
//     constructor ( private heater: Heater){}

//     make() {
//         this.heater.heat
//     }
// }

// 1. Component class (The tool/part)
class Heater {
    heat() {
        console.log("🔥 Heater is heating water and milk...");
    }
}

// 2. Main class using Composition (HAS-A relationship)
class ChaiMaker {
    // Explicitly declare the property to work with Node's strip-only mode
    private heater: Heater;

    constructor(heater: Heater) {
        this.heater = heater; // ChaiMaker HAS A heater
    }

    make() {
        this.heater.heat(); // Call the heater's method
        console.log("☕ Chai is ready to serve!");
    }
}

// 3. Usage
const myHeater = new Heater();
const chaiMachine = new ChaiMaker(myHeater);

chaiMachine.make();