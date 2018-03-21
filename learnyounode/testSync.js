'use strict'
var fs = require("fs");

/***
 * implementation of readFileSync
 */
var data = fs.readFileSync('test.txt');
let sum = 0;
for (let i = 0; i < data.toString().length; i++) {
  sum += data[i];
}
console.log(sum);
console.log("Program Ended");

/***
 * implementation of readFile 
 */
fs.readFile('test.txt', function (err, data) {
    if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");