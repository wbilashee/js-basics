// Simple types
var book = "Harry Potter";
var age = 35;
var bool = false;
// Special types
var any = 10;
var unknown = "Paris";
var never;
var undefind;
var empty = null;
// Arrays
var fruits = ["orange", "lemon"];
fruits.push("grapes");
var marks = [1, 2, 3, 4, 5];
// Tuples
var myTuple;
myTuple = ["bella", 53, true];
myTuple.push("nick");
var readonlyTuple = [25, "bill"];
var namedTuple = ["Eva", 28];
var model = namedTuple[0], year = namedTuple[1];
// Objects
var person = { name: "Jack", age: 45 };
person.city = "New york";
var userAge = {};
userAge.Peter = 34;
// Enums
var Status;
(function (Status) {
    Status[Status["NotStarted"] = 0] = "NotStarted";
    Status[Status["InProgress"] = 1] = "InProgress";
    Status[Status["Done"] = 2] = "Done";
})(Status || (Status = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
var car = {
    type: "Volvo",
    year: 2020
};
var user = {
    name: "Denly",
    age: 42,
    online: true,
    getName: function () {
        return this.name;
    }
};
// Union type
var online;
online = false;
// Function
var greet = function (name, greeting) {
    return "".concat(greeting || "Hello", " ").concat(name);
};
var printHello = function () {
    console.log("Hello");
};
var doNever = function () {
    throw "never";
};
var add = function (a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (total, value) { return total + value; }, 0);
};
// Casting
var str = "Amazing";
str.length;
str.length;
var element = document.querySelector(".name-input");
element.addEventListener("blur", function (event) {
    var target = event.target;
    console.log(target.value);
});
// Class
var Coder = /** @class */ (function () {
    function Coder(firstName, lastName, location, language) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.location = location;
        this.language = language;
    }
    Coder.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Coder;
}());
var harry = new Coder("Harry", "Potter", "London", "C++");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var emily = new Person("Emily", 38);
var zayn = {
    name: "Zayn Malik",
    data: {
        details: {
            age: 32,
            occupation: "Singer"
        }
    }
};
var volvo = {
    type: "Volvo",
    model: "Corolla",
    year: 2020
};
var marksPart = {};
marksPart.x = 55;
var inspiron = {
    type: "Dell",
    model: "Inspiron 15",
    memory: "64 GB"
};
var students = {
    Kyle: 27,
    James: 32
};
// keyof
function getUserProperty(user, property) {
    return user[property];
}
