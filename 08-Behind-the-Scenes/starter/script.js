'use strict';

function calcAge(birthYear) {
  const age = 2020 - birthYear;
  return age;
}

const firstName = 'Ben';
calcAge(1991);
console.log(calcAge(1974));
console.log(firstName);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
