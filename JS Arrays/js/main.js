/*

ARRAYS:

Arrays are list-like objects.
An array is a special variable that can hold more than one value inside of it.
Arrays allow us to create a list and store it in one variable. 

*/

// Creating an Array:
const myHobbies = new Array();
console.log(myHobbies);
const myBooks = [];
console.log(myBooks);

// We can create an array and populate it with some items at the same time
let furniture = ['Dining Table', 'Chair', 'Couch', 'Bed', 'Bench']; // 5 furniture list items

console.log(furniture);

// Access an Array Item:
let firstItem = furniture[0];
console.log(firstItem); // Dining Table

let lastItem = furniture[5];
console.log(lastItem);

let listLength = furniture.length;
console.log(listLength); // 5

lastItem = furniture[listLength - 1];
console.log(lastItem);

// PUSH:
let myFavNum = [2, 7, 25];
myFavNum.push(10);
console.log(myFavNum);

myFavNum[5] = 100;
console.log(myFavNum);

console.log(typeof myFavNum);