"use strict";

/* Function Declaration */
function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const sally = calcAge1(1974);
console.log(`Sally is ${sally} years old.`);



/* Function Expression */
const hey = function calcAge1(birthYear) {
    const age = 2021 - birthYear;
    return age;
}

const ben = hey(1974);
console.log(`Ben is ${sally} years old.`);
