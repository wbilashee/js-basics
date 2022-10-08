// Function
function add(a, b) {
    return a + b;
}
const numbers = [add(5, 3), add(2, 4)];
const welcome = (name) => `Welcome ${name}!`;
welcome.toString();

function divide(a, b = 3) {
    if (a === undefined) {
        a = 9;
    }
    arguments.length;
    return a / b;
}

function addAll() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const elem = arguments[i];
        sum += elem;
    }
    return sum;
}

function sumAll(...args) {
    let total = 0;
    for (const item of args) {
        total += item;
    }
    return total;
}

(function (name, job) {
    return `${name} is a ${job}.`;
})("Roman", "wrestler");

function morning(name) {
    return `Hey ${name}! Good morning.`;
}

function greet(name, callback) {
    return callback(name);
}

greet("Roman", morning);

const person = {
    bio(city) {
        return `${this.firstName} ${this.lastName} lives in ${city}.`;
    }
}

const oliver = {
    firstName: "Oliver",
    lastName: "Hudson"
}

person.bio.call(oliver, "Ottawa");
person.bio.apply(oliver, ["Toronto"]);
const intro = person.bio.bind(oliver);
intro("Sweden");

// Factory Function
function createPerson(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName,
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }
}

const tom = createPerson("Tom", "Cruise");
tom.fullName();

// Closure
function outer(name) {
    function inner() {
        return `Hello ${name}!`;
    }
    return inner;
}
outer("Jack")();

function account(name, initialBalance) {
    let balance = initialBalance;
    function checkBalance() {
        return `${name} has ${balance} dollars.`;
    }
    function deposit(amount) {
        balance += amount;
        checkBalance();
    }
    function withdraw(amount) {
        if (amount > balance) {
            console.log("Not enough money to withdraw!");
        } else {
            balance -= amount;
        }
        checkBalance();
    }
    return { checkBalance: checkBalance, deposit: deposit, withdraw: withdraw };
}

const anna = account("Anna", 2500);
anna.deposit(4500);
anna.withdraw(2000);
anna.checkBalance();