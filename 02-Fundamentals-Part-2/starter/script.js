"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

// Some private words
// const interface = "Audio";
// const private = 534;
// const if = 23;

function logger() {
    console.log(`My name is Rafael`);
}
// calling / invoking / running function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);


// Function declaration
function calcAge1(birthYear) {
    return 2025 - birthYear;
}

const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) { 
    return 2025 - birthYear;
}

const age2 = calcAge2(1999);

console.log(age1, age2);


// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1999, "Rafael"));
console.log(yearsUntilRetirement(1991, "Bob"));


function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));



const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        return retirement;
    } else {
        return `${firstName} has already retired`;
    }
}

console.log(yearsUntilRetirement(1999, "Rafael"));
console.log(yearsUntilRetirement(1950, "Bob"));

// Arrays
const friend1 = "Tomas";
const friend2 = "Alex";
const friend3 = "Edu";

const friends = ["Tomas", "Alex", "Edu"];
console.log(friends);

const y = new Array(1999, 1904, 2025, 1974, 1970);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = "Joao";
console.log(friends);
// friends = ["Bruna", "Almeida"];

const firstName = "Rafael";
const eu = [firstName, "Pinto", 2025 - 1999, "Estudante", friends];
console.log(eu);
console.log(eu.length);

const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1999, 1904, 2025, 1974, 1970];

const age1 =(calcAge(years[0]));
const age2 =(calcAge(years[2]));
const age3 =(calcAge(years[years.length - 1]));
console.log(age1, age2, age3);

const ages = [age1, age2, age3];
console.log(ages);

// Add elements
friends.push("Edu");
console.log(friends);

friends.unshift("Bruna");
console.log(friends);

// Remove elements
friends.pop(); // Last - Edu gets removed
friends.pop(); // New last - Joao gets removed
console.log(friends);

friends.shift(); // First - Bruna gets removed
console.log(friends);

console.log(friends.indexOf("Tomas"));
console.log(friends.indexOf("Alex"));

console.log(friends.includes("Tomas"));
console.log(friends.includes("Bruna"));

friends.push(23);
console.log(friends.includes("23"));
console.log(friends.includes(23));

if (friends.includes("Almeida")) {
    console.log("You have a friend called Almeida");
} else {
    console.log("You do not have a friend called Almeida");
}



// Objects
const rafael = {
    firstName: "Rafael",
    lastName: "Pinto",
    age: 2025 - 1999,
    job: "Student",
    friends: ["Tomás", "Alex", "João"]
};
console.log(rafael);

console.log(rafael.lastName);
console.log(rafael["lastName"]);

const nameKey = "Name";
console.log(rafael["first" + nameKey]);
console.log(rafael["last" + nameKey]);

const interestedIn = prompt("What do you want to know about Rafael? Choose between firstName, lastName, age, job, and friends");


if (rafael[interestedIn]) {
    console.log(rafael[interestedIn]);
} else {
    console.log("Wrong request");
}

// Add keys and values
rafael.location = "Portugal";
rafael["twitter"] = "@xau_ok";

// Challenge
// "Rafael has 3 friends, and his best friend is called Alex"
console.log(rafael.firstName + " has " + rafael.friends.length + " friends, and his best friend is called " + rafael.friends[1]);
console.log(`${rafael.firstName} has ${rafael.friends.length} friends, and his best friend is called ${rafael.friends[1]}`);



const rafael = {
    firstName: "Rafael",
    lastName: "Pinto",
    birthYear: 1999,
    job: "Student",
    friends: ["Tomás", "Alex", "João"],
    hasDriversLicense: false,

    //calcAge: function (birthYear) { 
    //    return 2025 - birthYear;
    //}

    //calcAge: function () {
    //    console.log(this);
    //    return 2025 - this.birthYear;
    //}

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()} year old ${this.job} and ${this.hasDriversLicense ? "a" : "no"} driver's license`;
    }
};

// console.log(rafael.calcAge());
// console.log(rafael.age); // Need to calculate age first -rafael.calcAge()
// console.log(rafael["calcAge"]());

// Challenge
// "Rafael is a 26 year old student and he has a driver's license"
console.log(rafael.getSummary());


// Loops
// For loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++){
    console.log(`Lifting weights repetion ${rep} 👌`);
}



const rafael = ["Rafael", "Pinto", 2025 - 1999, "Student",
    ["Tomás", "Alex", "João"]];

const types = [];

for (let i = 0; i < rafael.length; i++){
    // Reading from rafaelArray
    console.log(rafael[i]);

    // Filling typesArray
    // types[i] = typeof rafael[i]
    types.push(typeof rafael[i]);
}

console.log(types);

const years = [1999, 2025, 1904, 2017];
const ages = [];

for (let i = 0; i < years.length; i++){
    ages.push(2025 - years[i]);
}

console.log(ages);



const rafael = ["Rafael", "Pinto", 2025 - 1999, "Student",
    ["Tomás", "Alex", "João"]];

// Continue
console.log("--- ONLY STRINGS ---")
for (let i = 0; i < rafael.length; i++){
    if (typeof rafael[i] !== "string") continue;

    console.log(rafael[i], typeof rafael[i]);
}

// Break
console.log("--- BREAK WITH NUMBER ---")
for (let i = 0; i < rafael.length; i++){
    if (typeof rafael[i] === "number") break;

    console.log(rafael[i], typeof rafael[i]);
}



const rafael = ["Rafael", "Pinto", 2025 - 1999, "Student",
    ["Tomás", "Alex", "João"]];

for (let i = rafael.length - 1; i >= 0; i--){
    console.log(i, rafael[i]);
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++){
        console.log(` Exercise ${exercise}: Lifting weight repition ${rep}`);
    }
}

*/