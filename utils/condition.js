// Condition
// Truthy values are "0", " ", [], {}, "false" and true;
// Falsy values are 0, "", false, null, undefined and NaN.

let result;
let greeting;
const age = 17;
const day = new Date("15 October, 2022").getDay();

Boolean("");
Boolean(10 > 8);

const votable = (age > 18) ? "Old enough" : "Too young";

if (age < 18) {
    result = "You can't vote";
} else if (age === 18) {
    result = "You can apply for voter id";
} else {
    result = "You can vote";
}

switch (day) {
    case 0:
        greeting = "Happy Sunday!"
        break;
    case 1:
        greeting = "Happy Monday!"
        break;
    case 2:
        greeting = "Happy Tuesday!"
        break;
    case 3:
        greeting = "Happy Wednesday!"
        break;
    case 4:
        greeting = "Happy Thrusday!"
        break;
    case 5:
        greeting = "Happy Friday!"
        break;
    case 6:
        greeting = "Happy Saturday!"
        break;
    default:
        greeting = "Enjoy your day!"
        break;
}