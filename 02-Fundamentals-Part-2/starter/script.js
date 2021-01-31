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
// --------------------------------------------------------------------
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

// ____________________________________________________________________________

// const bill = [125, 555, 44];

// const calcTip = function (bill) {
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }

// }

// const yikes1 = [calcTip(bill[0]), calcTip(bill[1]), calcTip(bill[2])];

// console.log(bill, yikes1);

// ______________________________________________________________________________________


const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [125, 555, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tip[0], bills[1] + tip[1], bills[2] + tip[2]];

console.log(bills, tip, totals);

//______________________________________________________________________________________________

// Coding Challenge #3

const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.body = this.mass / (this.height * this.height);
        return this.body;
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.body = this.mass / (this.height * this.height);
        return this.body;
    }
};


console.log(mark.calcBMI());
console.log(mark.body);
console.log(john.calcBMI());
console.log(john.body);

const higher = function () {
    if (mark.body > john.body) {
        console.log(`Mark's BMI ( ${mark.body} ) is higher than John's BMI (${john.body} )`);
    } else {
        console.log(`John's BMI ( ${john.body} ) is higher than Mark's BMI (${mark.body} )`);
    }
}

console.log(higher());
