// Array
const marks = [40, 5, 100, 60, 75, 85, 5, 25, 10];
const drinks = ["soda", "water", ["coke", "pepsi"], []];
const fruits = ["apple", "mango", "banana", "guava"];
const set = new Set(["foo", "bar", "foo", "bue"]);
const actors = [{
    name: "Johnny Depp",
    age: 59
}, {
    name: "Tom Cruise",
    age: 60
}, {
    name: "Brad Pitt",
    age: 58
}];

fruits.length;
fruits[3] = "orange";
Array.from(set);
Array.isArray(fruits);
fruits instanceof Array;
fruits[fruits.length - 1];
fruits[fruits.length] = "peach";
delete fruits[2];

fruits.pop();
fruits.push("cherry");
fruits.shift();
fruits.unshift("grapes");
fruits.toString();
fruits.join(", ");
fruits.includes("kiwi");
fruits.concat(["melon", "pear"]);
fruits.slice(0, 2);
fruits.splice(1, 2, "kiwi", "olive");
fruits.sort();
fruits.reverse();
marks.indexOf(60);
marks.lastIndexOf(5);
Object.entries(fruits);

const sortAscending = marks.sort((a, b) => a - b);
const sortDescending = marks.sort((a, b) => b - a);
const sortRandom = marks.sort(() => 0.5 - Math.random());

const sortAges = actors.sort((a, b) => a.age - b.age);
const sortNames = actors.sort((a, b) => {
    let x = a.name.toLowerCase();
    let y = b.name.toLowerCase();

    if (x > y) {
        return 1;
    }
    if (x < y) {
        return -1;
    }
    return 0;
});

// Iteration
drinks.flat();
drinks.flatMap(item => item);
marks.forEach(value => value + 5);
marks.map(value => value - 5);
marks.filter(value => value > 40);
marks.reduce((total, value) => total + value);
marks.reduceRight((total, value) => total + value);
marks.some(value => value > 45);
marks.every(value => value < 30);
marks.find(value => value < 35);
marks.findIndex(value => value < 35);

// Iterator
const fruitsIterator = (values) => {
    let nextIndex = 0;

    return {
        next: function () {
            if (nextIndex < values.length) {
                return {
                    value: values[nextIndex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}

const fruit = fruitsIterator(fruits);
fruit.next();

// Generator
function* infinite() {
    let index = 0;

    while (true) {
        yield index++;
    }
}

const generator = infinite();
generator.next();

// Destructuring
const topper = Math.max(...marks);
const flowers = ["Lily", "Rose", "Tulip"]
const [first, second, third] = flowers;
const [veggie, dairy, ...others] = ["Broccoli", "Milk", "Sugar", "Lemon"];
