function getChai(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind} chai...`;///// -> data type string
    }

    return `Chai order: ${kind} cups`; ///// --> data type number
}

function serveChai(msg?: string) {
    if (msg) {
        return `Serving chai: ${msg}`;
    }

    return `Serving default masala chai.`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
    if (size === "small") { // exhostive check for string literal type
        return "Small cutting chai is ready!";
    }
    if (size === "medium" || size === "large") {
        return `Make extra chai...`;
    }
    return `Custom #${size} cups of chai are ready!`;
}












class KulhadChai {
    serve() {
        return `Serving kulhad chai...`;
    }
}

class CuttingChai {
    serve() {
        return `Serving cutting chai...`;
    }
}

function servechai(chai: KulhadChai | CuttingChai) {
    if (chai instanceof KulhadChai) {
        return chai.serve();
    }
    if (chai instanceof CuttingChai) {
        return chai.serve();
    }
}


// type guard function to check if the object is of type KulhadChai
type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar.`;
    }

    return `Serving custom chai: ${item}.`;
}

type MasalaChai = {
    type: "masala";
    spicelevel: number;
}
type GingerChai = {
    type: "ginger";
    amount: number;
}
type ElaicheChai = {
    type: "elaiche";
    aroma: number;
}

type Chai = MasalaChai | GingerChai | ElaicheChai;

// narrowing using switch statement
function MakeChai(chai: Chai) {
    switch (chai.type) {
        case "masala":
            return `Making masala chai with spice level ${chai.spicelevel}.`;
            break;
        case "ginger":
            return `Making ginger chai with amount ${chai.amount}.`;
            break;
        case "elaiche":
            return `Making elaiche chai with aroma ${chai.aroma}.`;
            break;
        default:
            return `Unknown chai type.`;
    }
}

function brewChai(order: MasalaChai | GingerChai) {
    if ("spiceLevel" in order) {
        // order is of type MasalaChai
    }
}

function isStringArray(arr: unknown): arr is string[] {
    return Array.isArray(arr) && arr.every((item) => typeof item === "string");
}