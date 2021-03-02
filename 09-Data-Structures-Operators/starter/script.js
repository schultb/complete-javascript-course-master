/* const arr = [2, 3, 4];

const [x, y, z] = arr;

console.log(x, y, z); */

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

/* Default values */
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

/* Mutating variables */
let a = 111;
let b = 999;
const obj = {
  a: 23,
  b: 7,
  c: 14,
};
({ a, b } = obj);
console.log(a, b);

/* Nested Object */
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

/* const [first, second, third] = restaurant.categories;
console.log(first, second, third); */

/* Empty portion with comma skips the second one in the list and moves to the third. */
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

/* This allows you to change property so that Vegetarian now comes before Italian. Switching variables*/
/* const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); */

/* Easier and better way to switch array order */
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));
/* Destructuring version--How we receive 2 return values from a function */
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

/* Destructuring array within an array as separate variables */
const nested = [2, 4, [5, 6]];
/* const [i, , j] = nested;
console.log(i, j); */
const [i, , [j, k]] = nested;
console.log(i, j, k);

/* Default Values */
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
