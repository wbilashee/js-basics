// Display Date
const date = document.getElementById("date");

function displayTime() {
    const d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let timeOfDay = d.getHours() > 11 ? "PM" : "AM";

    date.innerText = `${hours}:${minutes}:${seconds} ${timeOfDay}`;
}

setInterval(() => {
    displayTime();
}, 1000);

// Random User 
const userDiv = document.getElementById("user-div");
const newBtn = document.getElementById("new-btn");
newBtn.addEventListener("click", fetchUser);

function fetchUser() {
    userDiv.innerHTML = `<img src="./assets/spinner.gif" alt="spinner" />`;
    fetch("https://randomuser.me/api/")
        .then(res => res.json())
        .then(data => displayUser(data.results[0]));
}

function displayUser(user) {
    userDiv.innerHTML = `
    <div id="user-img">
      <img src="${user.picture.large}" alt="${user.id.name}" />
    </div>
    <div id="user-info">
      <h3>${user.name.first + " " + user.name.last}</h3>
      <p>Age: ${user.dob.age}</p>
      <p>Gender: ${user.gender}</p>
      <p>Phone: ${user.phone}</p>
      <p>Email: ${user.email}</p>
      <p>Location: ${user.location.country}</p>
    </div>`
}

fetchUser();

// Image Slider
const nextBtn = document.getElementById("nextBtn");
const nextImg = document.getElementById("next-img");
const images = [{
    color: "#C41E2F",
    url: "roses.jpg"
}, {
    color: "#D1589F",
    url: "alps-mountain.jpg"
}, {
    color: "#F0D1DC",
    url: "flower-vase.jpg"
}, {
    color: "#FBB94B",
    url: "flowers.jpg",
}, {
    color: "#E78EC5",
    url: "lemonade.jpg"
}, {
    color: "#850234",
    url: "meadow.jpg",
}, {
    color: "#F061B0",
    url: "pathway.jpg",
}, {
    color: "#F43C0C",
    url: "poppies.jpg"
}];

function slider(data) {
    let nextIndex = 0;

    return {
        next: function () {
            if (nextIndex < data.length) {
                return {
                    value: data[nextIndex++],
                    done: false
                }
            } else {
                nextIndex = 1;
                return {
                    value: data[0]
                }
            }
        }
    }
}

const image = slider(images);
const root = document.documentElement;
nextBtn.addEventListener("click", showImage);

function showImage() {
    const currentImage = image.next().value;
    root.style.setProperty("--color", currentImage.color);
    nextImg.setAttribute("src", `./assets/${currentImage.url}`);
}

// Search Image
const gallery = document.getElementById("gallery");
const spinner = document.getElementById("spinner");
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

searchForm.addEventListener("click", (e) => {
    e.preventDefault();
    searchImage();
});

function searchImage() {
    const inputValue = searchInput.value.split(" ");
    const value = inputValue.join("+");
    spinner.style.display = "block";
    gallery.innerHTML = "";

    fetch(`https://pixabay.com/api/?key=19198286-98539ba906a9a2590add72c51&q=${value || "flowers+garden"}&image_type=photo`)
        .then(res => res.json())
        .then(data => displayGallery(data));
}

function displayGallery(data) {
    data.hits.map(item => {
        const { webformatURL } = item;
        const img = document.createElement("img");
        img.src = webformatURL;
        gallery.appendChild(img);
    });
    spinner.style.display = "none";
}

searchImage();