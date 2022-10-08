// Class
class Account {
    constructor(name, balance) {
        this.name = name;
        this.balance = balance;
        this.bank = "Royal Bank";
    }
    checkBalance() {
        return `${this.name} has ${this.balance} dollars.`;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Not enough money to withdraw!");
        } else {
            this.balance -= amount;
        }
    }
}

const emma = new Account("Emma", 5000);
emma.deposit(4500);
emma.withdraw(6000);
emma.checkBalance();

class Employee {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }

    bio() {
        return `${this.name} is a programmer.`;
    }
}

class Programmer extends Employee {
    constructor(name, age, experience, language) {
        super(name, age, experience);
        this.language = language;
    }

    static hobby() {
        return `${this.name} loves to code.`;
    }

    get intro() {
        return `${this.name} is good at ${this.language}.`;
    }

    set lang(lang) {
        this.language = lang;
    }
}

const parker = new Programmer("Peter", 27, 5, "Python");
Programmer.hobby()
parker.lang = "Java";
parker.intro;