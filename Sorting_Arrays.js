// Sorting an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

// Reversing an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

// Numeric Sort

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});

// Sorting an Array in Random Order

const points = [40, 100, 1, 5, 25, 10];
points.sort(function () {
  return 0.5 - Math.random();
});

// The Fisher Yates Method

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

// Using Math.max() on an Array

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

// Using Math.min() on an Array

function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

// Sorting Object Arrays
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
