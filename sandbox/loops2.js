//loops2.js
const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

//While Loop
let i = 0;
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

//forEach()
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Intl.DateTimeFormat Options
const options = { weekday: 'long' }; // vs. short, etc.
//weekday
const today = new Date();
for (let i = 0; i <= DAYS; i++) {
    let nextDay = new Date();
    nextDay.setDate(today.getDate() + i);
    let nextdaystring = new Intl.DateTimeFormat('en-US', options).format(nextDay);
    console.log(nextdaystring);
}