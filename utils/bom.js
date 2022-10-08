// BOM
window.innerWidth;
window.innerHeight;
window.open("","Window","width=750,height=400");
window.close();
window.moveTo(500, 120);
window.resizeTo(750, 300);

// Screen
screen.width;
screen.height;
screen.availWidth;
screen.availHeight;
screen.colorDepth;
screen.pixelDepth;

// Location
location.href;
location.port;
location.hostname;
location.pathname;
location.protocol;
location.assign("https://google.com/");

// History
history.back();
history.forward();
history.go(-1);

// Navigator
navigator.onLine;
navigator.platform;
navigator.language;
navigator.userAgent;
navigator.cookieEnabled;

// Popup Boxes
alert("Hello!");
prompt("How are you?");
confirm("Do you love JS?");

// Cookie
document.cookie = "name=john";
document.cookie = "age=27"
decodeURIComponent(document.cookie).split("; ");