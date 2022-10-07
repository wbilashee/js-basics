// Sets
const fishes = new Set(["salmon", "brill", "tuna"]);

fishes.size;
fishes.add("prawn");
fishes.add("catfish");
fishes.add("prawn");
fishes.has("tuna");
fishes.keys();
fishes.values();
fishes.entries();
fishes.delete("brill");
fishes.clear();

fishes.forEach(value => {
    value;
});

for (const item of fishes) {
    item;
}

for (const key of fishes.keys()) {
    key;
}

for (const value of fishes.values()) {
    value;
}

for (const entry of fishes.entries()) {
    entry;
}

Array.from(fishes);