// need to impliment javascript types

function getYourName( str: string ) : string {
    // return "Your Name:" + str;

    // Flow nodes: check -> str is a string or not
    return `Your Name: ${str}`;
}

console.log(getYourName("John Doe"));
console.log(getYourName(true));