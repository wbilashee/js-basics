// Loops
const person = {
    firstName: "Steve",
    lastName: "Jobs",
    company: "Apple"
}
const text = "Web Development";
const cars = ["Mercedes", "Audi", "BMW", "Lamborghini"];

// for loop
for (let i = 0; i < 10; i++) {
    i;
}

for (let i = 0; i < cars.length; i++) {
    const item = cars[i];
    item;
}

for (let i = 0; i < Object.keys(person).length; i++) {
    const key = Object.keys(person)[i];
    const value = person[key];
    value;
}

for (let i = 0; i < text.length; i++) {
    const char = text[i];
    char;
}

// for-in loop
for (const key in person) {
    const value = person[key];
    value;
}

for (const i in cars) {
    const elem = cars[i];
    elem;
}

for (const char in text) {
    const elem = text[char];
    elem;
}

// for-of loop
for (const value of cars) {
    value;
}

for (const char of text) {
    char;
}

// while loop
let i = 0;
while (cars[i]) {
    const elem = cars[i];
    elem;
    i++;
}

// do-while loop
let x = 0;
do {
    const item = cars[x];
    item;
    x++;
} while (cars[x]);

// break
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    i;
}

// continue
for (let i = 0; i < 5; i++) {
    if (i === 3) continue;
    i;
}

// labels
pets: {
    "Cats";
    "Dogs";
    break pets;
    "Birds";
    "Snakes";
}