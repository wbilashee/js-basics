// Swap
let a = 5;
let b = 7;
let temp = a;
a = b;
b = temp;

// Or
let x = 5;
let y = 7;
x = x + y;
y = x - y;
x = x - y;

// Or
let p = 5;
let q = 7;
[p, q] = [q, p];

// Factorial
// 0! = 1;
// 5! = 1*2*3*4*5;
function factorialize(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

// using while loop
let factorial = 1;
let i = 1;
while (i <= 5) {
    factorial = factorial * i;
    i++;
}

// in recursive way
// 5! = 5*4*3*2*1;
function recursiveFactorial(n) {
    let factorial = 1;
    for (let i = n; i >= 1; i--) {
        factorial = factorial * i;
    }
    return factorial;
}

// using while loop
factorial = 1;
i = 5;
while (i >= 1) {
    factorial = factorial * i;
    i--;
}

// using recursive function
// 5! = 1*2*3*4*5;
// 5! = (5-1)!*5;
// n! = (n-1)!*n;
function recursiveFact(n) {
    if (n == 0) {
        return 1;
    }
    return n * recursiveFact(n - 1);
}

// Fibonacci
// fibo[5] = fibo[5 - 1] + fibo[5 - 2];
// fibo[i] = fibo[i - 1] + fibo[i - 2];
function fibonacci(n) {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}

// by while loop
let fibo = [0, 1];
i = 2;
while (i <= 12) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
    i++;
}

// using recursive number function
function recursiveFibonacciNumber(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    return recursiveFibonacciNumber(n - 1) + recursiveFibonacciNumber(n - 2);
}

// using recursive series function
function recursiveFibonacciSeries(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return [0, 1];
    }
    let fibo = recursiveFibonacciSeries(n - 1);
    let nextFibo = fibo[n - 1] + fibo[n - 2];
    fibo.push(nextFibo);
    return fibo;
}

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "No, It is not a prime number.";
        }
    }
    return "Yes, It is a prime number.";
}

// Find the max number in the array
function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        if (elem > max) {
            max = elem;
        }
    }
    return max;
}

// Get the sum of the numbers in the array
function getArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        sum += elem;
    }
    return sum;
}

//Remove the duplicates from the array
function getUniqueArray(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        const elem = arr[i];
        let index = unique.indexOf(elem);
        if (index == -1) {
            unique.push(elem);
        }
    }
    return unique;
}

//Count the words of a string
function countWords(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char == " " && str[i - 1] !== " ") {
            count++;
        }
    }
    count++;
    return count;
}

// Convert Celsius to Fahrenheit
function convertToF(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
convertToF(30);

// Reverse a string
function reverseString(str) {
    let reversed = "";
    for (let i = 0; i < str.length; i++) {
        const elem = str[i];
        reversed = elem + reversed;
    }
    return reversed;
}

// Reverse a String
function reverseString(str) {
    let arr = str.split("");
    let reversedStr = [];
    for (let i = 0; i < arr.length; i++) {
        reversedStr.unshift(arr[i])
    }
    return reversedStr.join("");
}
reverseString("hello");

// Find the Longest Word in a String
function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxlen = 0;
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxlen) {
            maxlen = words[i].length;
        }
    }
    return maxlen;
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largeNumsArray = [];
    for (let i = 0; i < arr.length; i++) {
        let largeNum = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > largeNum) {
                largeNum = arr[i][j];
            }
        }
        largeNumsArray[i] = largeNum;
    }
    return largeNumsArray;
}
largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
]);

// Confirm the Ending
function confirmEnding(str, target) {
    return str.slice(-target.length) == target;
}
confirmEnding("Bastian", "tian");

// Repeat a String
function repeatStringNumTimes(str, num) {
    let repeated = "";
    for (let i = 0; i < num; i++) {
        repeated += str;
    }
    return repeated;
}
repeatStringNumTimes("abc", 4);

// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    }
    return str;
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Finders Keepers
function findElement(arr, func) {
    let num = undefined;
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i]) === true) {
            num = arr[i];
            break;
        }
    }
    return num;
}
findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
});

// Boo Who
function booWho(bool) {
    if (bool === true || bool === false) {
        return true;
    } else {
        return false;
    }
}
booWho(null);

// Title Case A Sentence
function titleCase(str) {
    let arr = str.split(" ");
    let title = arr.map(val => val.replace(val.charAt(0), val.charAt(0).toUpperCase()));
    return title.join(" ");
}
titleCase("I'm a little tea pot");

// Slice & Splice
function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
        result.splice(n, 0, arr1[i]);
        n++;
    }
    return result;
}
frankenSplice([1, 2, 3], [4, 5, 6], 1);

// Falsy Bouncer
function bouncer(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
bouncer([7, "ate", "", false, 9]);

// Where do I Belong
function getIndexToIns(arr, num) {
    let newArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            return i;
        }
    }
    return newArr.length;
}
getIndexToIns([40, 60], 50);

// Mutation
function mutation(arr) {
    let chars = [];
    for (let i = 0; i < arr.length; i++) {
        chars = arr[0].toLowerCase();
        for (let j = 0; j < arr[1].length; j++) {
            if (chars.indexOf(arr[1][j].toLowerCase()) == -1) {
                return false;
            }
        }
    }
    return true;
}
mutation("Alien", "ine");

// Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i + size));
    }
    return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Sum All Numbers in a Range
function sumAll(arr) {
    let max = Math.max(...arr)
    let min = Math.min(...arr)
    let sumBetween = 0;
    for (let i = min; i <= max; i++) {
        sumBetween += i;
    }
    return sumBetween;
}
sumAll([1, 4]);

// Diff Two Arrays
function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
        for (let i = 0; i < first.length; i++) {
            if (second.indexOf(first[i]) === -1) {
                newArr.push(first[i])
            }
        }
    }
    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);
    return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Seek and Destroy
function destroyer(arr, ...valsToRemove) {
    return arr.filter(val => !valsToRemove.includes(val))
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
    let srcKeys = Object.keys(source)
    // filter the collection
    return collection.filter((obj) => {
        for (let i = 0; i < srcKeys.length; i++) {
            if (!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]
            ) {
                return false;
            }
        }
        return true;
    })
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal Tap Case
function spinalCase(str) {
    return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}
spinalCase('AllThe-small Things');

// Pig Latin
function translatePigLatin(str) {
    let regex = /^[^aeiou]+/;
    let consonant = str.match(regex)
    return consonant !== null ?
        str
            .replace(regex, "")
            .concat(consonant)
            .concat("ay") :
        str.concat("way");
}
translatePigLatin("klgorithm");

// Search and Replace
function myReplace(str, before, after) {
    if (/^[A-Z]/.test(before)) {
        after = after.charAt(0).toUpperCase() + after.substring(1);
    } else {
        after = after.charAt(0).toLowerCase() + after.substring(1);
    }
    return str.replace(before, after);
}
myReplace("I think we should look up there", "up", "Down");

// DNA Pairing
function pairElement(str) {
    //create object for pair lookup
    var pairs = {
        A: "T",
        T: "A",
        C: "G",
        G: "C"
    }
    //split string into array of characters
    let arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(val => [val, pairs[val]])
}
pairElement("GCG");

// Missing Letters
function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
            return String.fromCharCode(str.charCodeAt(i - 1) + 1);
        }
    }
}
fearNotLetter("abce");

// Sorted Union
function uniteUnique(arr) {
    let newArr = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
            newArr.push(arguments[i][j])
        }
    }
    let unique = [];
    for (let i = 0; i < newArr.length; i++) {
        const elem = newArr[i];
        let index = unique.indexOf(elem);
        if (index == -1) {
            unique.push(elem);
        }
    }
    return unique;
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
    let temp = str.split("");
    for (let i = 0; i < temp.length; i++) {
        switch (temp[i]) {
            case "&":
                temp[i] = "&amp;"
                break;
            case "<":
                temp[i] = "&lt;"
                break;
            case ">":
                temp[i] = "&gt;"
                break;
            case "'":
                temp[i] = "&apos;"
                break;
            case '"':
                temp[i] = "&quot;"
                break;

        }
    }
    return temp.join("");
}
convertHTML("Dolce & Gabbana");

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    let prev = 0;
    let current = 1;
    let result = 0;
    while (current <= num) {
        if (current % 2 !== 0) {
            result += current;
        }
        current += prev;
        prev = current - prev;
    }
    return result;
}
sumFibs(4);

// Sum All Primes
function sumPrimes(n) {
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}
sumPrimes(10);

// Smallest Common Multiple
function smallestCommons(arr) {
    //Setup
    let [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;

    //Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) {
        upperBound *= i;
    }

    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;

        for (let i = min; i <= max; i++) {
            //Count Divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
            if (divisorCount === numberDivisors) {
                return multiple;
            }
        }
    }
}
smallestCommons([1, 5]);

// Drop it
function dropElements(arr, func) {
    let originalLength = arr.length;
    for (let i = 0; i < originalLength; i++) {
        if (func(arr[0])) {
            break;
        } else {
            arr.shift();
        }
    }

    return arr;
}
dropElements([1, 2, 3, 4], function (n) { return n > 5 });

// Steamroller
function steamrollArray(arr) {
    // return arr.flat(4);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(steamrollArray(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
steamrollArray([1, {}, [3, [[4]]]]);

// Binary Agents
function binaryAgent(str) {
    var arr = str.split(" ");
    var res = "";
    arr.forEach(function (string, index, array) {
        res += String.fromCharCode(parseInt(string, 2));
    });
    return res;
}
binaryAgent("01001001 00100000 01001100 01001111  01010110 01000101 00100000 01000011 01001111 01000100 01001001 01001110 01000111");

// Everything Be True
function truthCheck(collection, pre) {
    return collection.every((elem) => {
        return elem.hasOwnProperty(pre) && Boolean(elem[pre])
    })
}
truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex");

// Arguments Optional
function addTogether() {
    const [first, second] = Object.values(arguments);
    // Check first argument
    if (typeof first !== "number") {
        return undefined;
    }

    // Function to add second argument
    const addSecond = (second) => typeof second === "number" ? first + second : undefined;

    // Check second argument
    if (second !== undefined) {
        return addSecond(second);
    } else {
        return addSecond;
    }
}
addTogether(5)(7);

// Make a Person
let Person = function (firstAndLast) {
    let fullName = firstAndLast;

    this.getFirstName = function () {
        return fullName.split(" ")[0];
    }

    this.getLastName = function () {
        return fullName.split(" ")[1];
    }

    this.getFullName = function () {
        return fullName;
    };

    this.setFirstName = function (first) {
        return fullName = first + " " + fullName.split(" ")[1];
    }

    this.setLastName = function (last) {
        return fullName = fullName.split(" ")[0] + " " + last;
    }

    this.setFullName = function (first, last) {
        return fullName = last ? first + " " + last : first;
    }
};

let bob = new Person('Bob Ross');
Object.keys(bob).length;
bob.getFirstName();
bob.getLastName();
bob.setFirstName("Johnny");
bob.setLastName("Depp");
bob.setFullName('Haskell Curry');
bob.getFullName();

// Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var a = 2 * Math.PI;
    var newArr = [];

    var getOrbPeriod = function (obj) {
        var c = Math.pow(earthRadius + obj.avgAlt, 3);
        var b = Math.sqrt(c / GM);
        var orbPeriod = Math.round(a * b);
        // create new object
        return { name: obj.name, orbitalPeriod: orbPeriod };
    };

    for (var elem in arr) {
        newArr.push(getOrbPeriod(arr[elem]));
    }

    return newArr;
}
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// Palindrome Checker
function palindrome(str) {
    let regex = /[A-Za-z0-9]+/g;
    let target = str.match(regex).join('').toLowerCase();
    return target == target.split('').reverse().join('');
}
palindrome("0_0 (: /-\ :) 0-0");

// Roman Numeral Converter
function convertToRoman(num) {
    if (isNaN(num))
        return NaN;
    let digits = String(+num).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}
convertToRoman(100);

// Caesars Cipher
function rot13(str) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, rot13);

    function rot13(correspondance) {
        const charCode = correspondance.charCodeAt();
        //A = 65, Z = 90
        return String.fromCharCode(
            ((charCode + 13) <= 90) ? charCode + 13
                : (charCode + 13) % 90 + 64
        );

    }
}
rot13("SERR PBQR PNZC");

// Telephone Number Validator
function telephoneCheck(str) {
    return (/^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/).test(str);
}
telephoneCheck("555-555-5555");

// Cash Register
function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let database = { "ONE HUNDRED": 100, "TWENTY": 20, "TEN": 10, "FIVE": 5, "ONE": 1, "QUARTER": 0.25, "DIME": 0.1, "NICKEL": 0.05, "PENNY": 0.01 };
    let result = [];
    let remain = 0;
    
    // First logical block for recursion
    let func = function (money, base, balance) {
        let num = Math.floor(money / database[base]);
        let newMoney = money;
        if (num * database[base] >= balance) {
            newMoney = (money * 1000 - balance * 1000) / 1000;
            result.push([base, balance]);
        } else if (num * database[base] < balance && num != 0) {
            newMoney = (money * 1000 - num * database[base] * 1000) / 1000;
            result.push([base, num * database[base]]);
            remain = (remain * 1000 + balance * 1000 - num * database[base] * 1000) / 1000;
        } else if (num == 0) {
            newMoney = money;
            remain = (remain * 1000 + balance * 1000) / 1000;
        }
        return newMoney;
    }
    // recursion as below
    for (let i = 8; i >= 0; i--) {
        change = func(change, cid[i][0], cid[i][1]);
    }
    // Second logical block
    if (change > 0) {
        return { "status": "INSUFFICIENT_FUNDS", "change": [] };
    } else if (change == 0 && remain == 0) {
        return { "status": "CLOSED", "change": cid };
    } else if (change == 0 && remain > 0) {
        return { "status": "OPEN", "change": result };
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);