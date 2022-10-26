// Simple types
const book: string = "Harry Potter";
const age: number = 35;
const bool: boolean = false;

// Special types
let any: any = 10;
let unknown: unknown = "Paris";
let never: never;
let undefind: undefined;
let empty: null = null;

// Arrays
const fruits: string[] = ["orange", "lemon"];
fruits.push("grapes");
const marks: readonly number[] = [1, 2, 3, 4, 5];

// Tuples
let myTuple: [string, number, boolean];
myTuple = ["bella", 53, true];
myTuple.push("nick");
const readonlyTuple: readonly [number, string] = [25, "bill"];
const namedTuple: [model: string, year: number] = ["Eva", 28];
const [model, year] = namedTuple;

// Objects
const person: {
  name: string;
  age: number;
  city?: string;
} = { name: "Jack", age: 45 };
person.city = "New york";
const userAge: { [index: string]: number } = {};
userAge.Peter = 34;

// Enums
enum Status {
  NotStarted,
  InProgress,
  Done,
}

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400,
}

// Aliases
type CarType = string;
type CarYear = number;
type Car = {
  type: CarType;
  year: CarYear;
};

const car: Car = {
  type: "Volvo",
  year: 2020,
};

// Interface
interface UserInterface {
  name: string;
  age: number;
  online?: boolean;
  getName: () => string;
}

const user: UserInterface = {
  name: "Denly",
  age: 42,
  online: true,
  getName() {
    return this.name;
  },
};

// Union type
let online: boolean | null;
online = false;

// Function
const greet = (name: string, greeting?: string): string => {
  return `${greeting || "Hello"} ${name}`;
};

const printHello = (): void => {
  console.log("Hello");
};

const doNever = (): never => {
  throw "never";
};

const add = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((total, value) => total + value, 0);
};

// Casting
const str: unknown = "Amazing";
(str as string).length;
(<string>str).length;

const element = document.querySelector(".name-input");
element.addEventListener("blur", (event) => {
  const target = event.target as HTMLInputElement;
  console.log(target.value);
});

// Class
class Coder {
  public firstName: string;
  public lastName: string;
  protected language: string;
  private readonly location: string;

  public constructor(
    firstName: string,
    lastName: string,
    location: string,
    language: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.location = location;
    this.language = language;
  }

  public getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

const harry = new Coder("Harry", "Potter", "London", "C++");

class Person implements UserInterface {
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }
}

const emily = new Person("Emily", 38);

// Generics
interface PersonInterface<T> {
  name: string;
  data: T;
}

const zayn: PersonInterface<{ details: {} }> = {
  name: "Zayn Malik",
  data: {
    details: {
      age: 32,
      occupation: "Singer",
    },
  },
};

interface CarInterface<T, V> {
  type: string;
  model: T;
  year: V;
}

const volvo: CarInterface<string, number> = {
  type: "Volvo",
  model: "Corolla",
  year: 2020,
};

// Utility types
interface Marks {
  x: number;
  y: number;
}

const marksPart: Partial<Marks> = {};
marksPart.x = 55;

interface Laptop {
  type: string;
  model: string;
  memory?: string;
}

const inspiron: Required<Laptop> = {
  type: "Dell",
  model: "Inspiron 15",
  memory: "64 GB",
};

const students: Record<string, number> = {
  Kyle: 27,
  James: 32,
};

// keyof
function getUserProperty(user: UserInterface, property: keyof UserInterface) {
  return user[property];
}
