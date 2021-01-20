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

