// Console
console.time("duration");
console.log("Hello");
console.table([{
    name: "Jack",
    age: 26,
    job: "coder"
}, {
    name: "Johnny",
    age: 60,
    job: "actor"
}]);
console.warn("An error occurred!");
console.error("request failed");
const lifeTime = 120;
console.assert(lifeTime > 120, "It's not possible");
console.count("coffee");
console.count("coffee");
console.countReset("coffee");
console.count("coffee");
console.count("coffee");
console.count("coffee");
console.debug("debug");
console.dir(document.head);
console.dirxml(document);
const label = "Coders";
console.group(label);
console.groupCollapsed(label);
console.info("Jack");
console.info("Liam");
console.info("Eric");
console.groupEnd(label);
const foo = () => {
    const bar = () => {
        console.trace();
    }
    bar();
}
foo();
console.timeEnd("duration");
console.clear();