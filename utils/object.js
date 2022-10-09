// Object
const person = {
    firstName: "Roman",
    lastName: "Reigns",
    age: 38,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    car: {
        name: "Lamborghini",
        model: "Urus",
        price: 400000
    },
    language: "English",
    hobby: "Traveling",
    get lang() {
        return this.language;
    },
    set setHobby(hobby) {
        this.hobby = hobby;
    }
}

delete person.age;
Object.keys(person);
Object.values(person);
Object.entries(person);
JSON.stringify(person);
person["country"] = "USA";
person.setHobby = "Wrestling";

// Constructor
function Account(name, balance) {
    this.name = name;
    this.balance = balance;
}

Account.prototype.bank = "Royal Bank";
Account.prototype.checkBalance = function () {
    return `${this.name} has ${this.balance} dollars.`;
}
Account.prototype.deposit = function (amount) {
    this.balance += amount;
}
Account.prototype.withdraw = function (amount) {
    if (amount > this.balance) {
        console.log("Not enough money to withdraw!");
    } else {
        this.balance -= amount;
    }
}

const natalia = new Account("Natalia", 4750);
natalia.bank;
natalia.deposit(2250);
natalia.withdraw(4000);
natalia.checkBalance();

function Employee(name, age, experience) {
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.hobby = function () {
        return `${this.name} has a hobby of coding.`;
    }
}

function Programmer(name, age, experience, language) {
    Employee.call(this, name, age, experience);
    this.language = language;
}

Programmer.prototype = Object.create(Employee.prototype);
Programmer.prototype.constructor = Employee;

const jack = new Programmer("Jack", 28, 4, "Python");
jack.hobby();

const proto = {
    bio() {
        return "I am a coder.";
    },
    setName(name) {
        this.name = name;
    }
}

const lily = Object.create(proto, {
    name: { value: "Lily Rose", writable: true },
    age: { value: 28 }
});
lily.setName("Aurora");

// Destructuring
const computer = {
    name: "iMac",
    model: "27 inch",
    stability: "7 yrs",
    company: "Apple",
    start() {
        return "Welcome!";
    }
}

const {
    name,
    model,
    start,
    ...others
} = computer;