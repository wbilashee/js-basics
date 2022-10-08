// DOM
let anchor = document.getElementById("link");
anchor = document.querySelector("#link");
let main = document.getElementById("main");
const button = document.getElementById("button");
let title = document.getElementsByTagName("h1")[0];
title = document.getElementsByClassName("text-center")[0];
const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
anchor.href = url;
anchor.innerText = "JS";
anchor.getAttribute("href");
anchor.setAttribute("href", url);
anchor.style.color = "#FFDF00";

const container = document.createElement("div");
container.classList.add("container");
container.classList.contains("flex");
main.appendChild(container);
main.removeChild(container);
main.insertBefore(container, title);
main.replaceChild(container, title);
container.remove();
main.removeChild(button);

document.URL;
docuent.head;
document.body;
document.title;
document.forms;
document.links;
document.cookie;
document.domain;
document.images;
document.baseURI;
document.doctype;
document.scripts;
document.documentElement;

main.addEventListener("click", divClickHandler, true);
button.addEventListener("click", btnClickHandler, true);

function btnClickHandler(e) {
    e.target;
    e.currentTarget;
    e.stopPropagation();
    console.log("child");
}

function divClickHandler(e) {
    e.target;
    e.currentTarget;
    console.log("parent");
}

button.removeEventListener("click", btnClickHandler);

const btn = main.childNodes[3];
btn.nodeName;
btn.nodeType;
btn.nodeValue;
main.parentNode;
main.firstChild;
main.lastChild;
button.nextSibling;
button.previousSibling;

const text = document.createTextNode("Hello world");
title.innerText = text.nodeValue;