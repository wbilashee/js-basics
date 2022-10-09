// Async
let text;

setTimeout(() => {
    text = "hello world";
}, 1000);

setInterval(() => {
    text = "hello world";
}, 2000);

const promise = new Promise((resolve, reject) => {
    let value = false;

    if (!value) {
        resolve("Everything is okay.");
    } else {
        reject("Please try again.");
    }
});

promise
    .then(value => value)
    .catch(error => error);

try {
    throw eval('alert("Hey)');
} catch (error) {
    error;
    error.name;
    error.message;
} finally {
    "finally";
}

function loadData() {
    const xhr = new XMLHttpRequest();

    xhr.onprogress = function () {
        return xhr.readyState;
    }

    xhr.onreadystatechange = function () {
        return xhr.readyState;
    }

    xhr.onload = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            console.log(data);
        } else {
            alert("Some error occurred!");
        }
    }

    xhr.getAllResponseHeaders();
    xhr.getResponseHeader("Content-Type");

    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);

    xhr.send();
}

function postData() {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        return this.readyState;
    }

    xhr.onload = function () {
        const data = JSON.parse(this.responseText);
        console.log(data);
    }

    xhr.open("POST", "https://reqres.in/api/users", true);

    xhr.getResponseHeader("Last-Modified");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.getAllResponseHeaders("Content-Type", "application/x-www-form-urlencoded");

    let params = `{"name":"jack","salary":"750","age":"27"}`;
    xhr.send(params);
}