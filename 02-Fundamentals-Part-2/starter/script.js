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

const calcAverage = (a, b, c) => (a + b + c) / 3;

/* const hello = function(a, b, c) {
  let crazy = (a + b + c) / 3;
  return crazy;
}
console.log(calcAverage(10, 30, 69));
 */

/* Test 1 */
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    } else {
        console.log(`No team wins`);
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

/* Test 2 */
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
console.log(checkWinner(scoreDolphins, scoreKoalas));
