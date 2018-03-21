let array = process.argv; // grab the cmd line arguments, stored to an array
// array.shift(); // remove the first two elements being 'node' and script file
// array.shift();
// console.log(array);
let sum = 0;

for (let i = 2; i < array.length; i++) {
  sum += Number(array[i]);// coerce each string element to a number and add to sum
}
console.log(sum);
