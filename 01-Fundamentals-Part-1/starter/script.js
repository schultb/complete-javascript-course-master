// let js = "amazing";
// if (js === "amazing") alert("Javascript is fun!");


// Coding Challenge #1
// let markMass = 95;
// let markHeight = 1.88
// let johnMass = 85;
// let johnHeight = 1.76;

// var bmiMark = markMass / markHeight ** 2;
// var bmiJohn = johnMass / johnHeight ** 2;

// console.log(bmiMark, bmiJohn);

// var markHigherBMI = bmiMark > bmiJohn;

// console.log(markHigherBMI);


// Coding Challenge #2

let markMass = 95;
let markHeight = 1.88
let johnMass = 85;
let johnHeight = 1.76;

var bmiMark = markMass / markHeight ** 2;
var bmiJohn = johnMass / johnHeight ** 2;

var markHigherBMI = bmiMark > bmiJohn;

console.log(bmiMark, bmiJohn);

if (markHigherBMI) {
    console.log(`Mark's BMI is higher than John's!`)
} else {
    console.log(`John's BMI is higher than Mark's!`)
};

if (markHigherBMI) {
    console.log(`Mark's BMI, ${bmiMark}, is higher than John's, ${bmiJohn}.`)
} else {
    console.log(`John's BMI, ${bmiJohn}, is higher than Mark's, ${bmiMark}.`)
};
//////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

const dolphins1 = 7;
const dolphins2 = 112;
const dolphins3 = 101;

const koalas1 = 109;
const koalas2 = 95;
const koalas3 = 6;

const averageDolphins = ((dolphins1 + dolphins2 + dolphins3) / 3);
const averageKoalas = ((koalas1 + koalas2 + koalas3) / 3);

console.log(averageDolphins, averageKoalas);

/* if (averageDolphins > averageKoalas) {
  console.log("Dolphins win!");
} else if (averageDolphins === averageKoalas) {
  console.log("It's a tie!");
} else {
  console.log("Koalas win!");
} */

if ((averageDolphins >= 100) && (averageDolphins > averageKoalas)) {
    console.log("Dolphins win!");
} else if (averageDolphins === averageKoalas) {
    console.log("It's a tie!");
} else if ((averageKoalas >= 100) && (averageKoalas > averageDolphins)) {
    console.log("Koalas win!");
} else {
    console.log("No one wins! Draw!");
}

const bill = 150;
const tip1 = (bill * (15 / 100));
const tip2 = (bill * (20 / 100));

bill >= 50 && bill <= 300 ? console.log(`The bill is ${bill}, the tip is ${tip1}, and the total value is ${bill + tip1}`) : bill <= 49 ? console.log("No tip!") : console.log(`The bill is ${bill}, the tip is ${tip2}, and the total value is ${bill + tip2}`);