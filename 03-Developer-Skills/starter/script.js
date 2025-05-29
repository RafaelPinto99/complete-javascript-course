// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// PROBLEM 1:
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there
// might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// Understanting the problem
/* 
- What is temp amplitude? Answer: difference between highest and lowest temp
- How to compute max and min temperatues?
- What's a sensor error? And what to do?
*/

// Breaking up into sub-problems
/*
- How to ignore errors?
- Find max value in temp array
- Find min value in temp array
- Subtract min from max (amplitude) and return it
*/
/*
const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;
        
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// PROBLEM 2:
// Problem should now receive 2 arrays of temps

// Understanding the problem
/*
- With 2 arrays should we implement functionality  twice? 
  No! Just merge 2 arrays
*/

// Breaking up the problem
/*
- Merge  2 arrays
*/
/*
const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);
    console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitude([3, 5, 1], [9, 0 ,5]);
console.log(amplitudeNew);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",

    // FIX
    value: Number(prompt("Degrees celsius:")), // prompt always returns a string
  };

  // FIND
  console.log(typeof measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  // console.table(measurement.value);
  // debugger;
  const kelvin = measurement.value + 273;
  return kelvin;
};
// IDENTIFY
console.log(measureKelvin());
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

/*
// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
*/

/*
const forecasted = [17, 21, 23];
let thermometer = "... ";

console.log(forecasted.length);

const printForecast = function (arr) {
  for (let i = 0; i < forecasted.length; i++) {
    thermometer += ` ${forecasted[i]}ºC in ${[i + 1]} days ...`;
  }

  return thermometer;
};

console.log(printForecast(forecasted));
*/

///////////////////////////////////////
// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/
