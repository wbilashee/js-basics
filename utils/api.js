// API
// Web Storage
localStorage.length;
localStorage.key(0);
localStorage.setItem("name", "John");
localStorage.getItem("name");
localStorage.removeItem("name");
localStorage.clear();

// Session Storage
sessionStorage.length;
sessionStorage.key(0);
sessionStorage.setItem("name", "Nani");
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.clear();

// Fetch API
const file = "../assets/demo.txt";
const url = "https://jsonplaceholder.typicode.com/posts";

fetch(file)
    .then(res => res.text())
    .then(data => data);

async function getFile() {
    const fileObj = await fetch(file);
    const fileTxt = await fileObj.text();
    return fileTxt;
}

function postData(url) {
    let data = JSON.stringify({
        title: "Harry Potter",
        body: "A book by J.K. Rowling"
    });

    let params = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    }

    fetch(url, params)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}