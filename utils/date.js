// Date
const date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

new Date("2020-05-15");
new Date("05/15/2020");
new Date("15 May 2020");
new Date("15 May, 2020");
new Date("2020-05-15T12:00:00Z");

Date.parse("15 May 2020");
const string = date.toString();
const UTCString = date.toUTCString();
const ISOString = date.toISOString();
const dateString = date.toDateString();

// Get methods
const now = Date.now();
const time = date.getTime();
const currentDate = date.getDate();
const year = date.getFullYear();
const month = months[date.getMonth()];
const day = days[date.getDay()];
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const milliseconds = date.getMilliseconds();

// Set methods
date.setDate(20);
date.setMonth(6);
date.setHours(20);
date.setMinutes(30);
date.setSeconds(20);
date.setMilliseconds(500);
date.setFullYear("2020");
date.setTime(1000000000000);