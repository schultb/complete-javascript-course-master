// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} Celsius in ${i + 1} days ... `;
  }
  console.log("... " + str);
};
printForecast(data1);
printForecast(data2);
