// Maps
const veggies = new Map([
    ["carrot", 300],
    ["broccoli", 200],
    ["corn", 500]
]);

veggies.size;
veggies.set("potato", 450);
veggies.get("corn");
veggies.has("carrot");
veggies.keys();
veggies.values();
veggies.entries();
veggies.delete("corn");
veggies.clear();

veggies.forEach((value, key) => {
    key, value;
})

for (const [key, value] of veggies) {
    key, value;
}

for (const key of veggies.keys()) {
    key;
}

for (const value of veggies.values()) {
    value;
}

for (const [key, value] of veggies.entries()) {
    key, value;
}

Array.from(veggies);
Array.from(veggies.keys());
Array.from(veggies.values());