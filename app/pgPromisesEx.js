'use strict';

var prompt = require('prompt-promise');

var promise = require('bluebird');
var initOptions = { promiseLib: promise };
var pgp = require('pg-promise')(initOptions);
var connectionString = 'postgres://localhost:5432/testmusic';
var db = pgp(connectionString);

var result = [];
var name, year, artistid;
// how do we extract values from an array for SQL to INSERT INTO?
// right now, the array elements are called

prompt('Album name? ')
.then(function albumResponse(val) {
  result.push(val);
  name = val;
  return prompt('Album year? ');
})
.then(function yearResponse(val) {
  result.push(val);
  year = val;
  return prompt('Artist ID? ');
})
.then(function idResponse(val) {
  result.push(Number(val));
  artistid = Number(val);
  return prompt.confirm('Is this ok? (yes) ');
})
.then(function storeRecord() {
  db.none('INSERT INTO album(name, year, artistid) values ($1, $2, $3)', [result[0], result[1], result[2]]);
  // result.push(val);
  
  
  // console.log('Done! :)');

})

.finally(function getLastRecord() {
  
  db.one('SELECT * FROM album ORDER BY id DESC LIMIT 1').then(function(data) { // data is an array with object elements; the SQL cmd only gets the second to last entry...
  // db.one('SELECT * FROM album WHERE name=$1', result[0]).then(function(data) { // data is an array with object elements; the SQL cmd only gets the second to last entry...
    console.log('Created album with ID ' + data['id'], result);
    
    return;
  });
  console.log(name, year, artistid);
});

