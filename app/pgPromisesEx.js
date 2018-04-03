'use strict';

var prompt = require('prompt-promise');

var promise = require('bluebird');
var initOptions = { promiseLib: promise };
var pgp = require('pg-promise')(initOptions);
var connectionString = 'postgres://localhost:5432/testmusic';
var db = pgp(connectionString);

var result = [];

prompt('Album name? ')
.then(function albumResponse(val) {
  result.push(val);
  return prompt.prompt('Album year? ');
})
.then(function yearResponse(val) {
  result.push(val);
  return prompt.prompt('Artist ID? ');
})
.then(function idResponse(val) {
  result.push(val);
  return prompt.confirm('Is this ok? (yes) ');
})
.then(function confirmResponse(val) {
  result.push(val);
  console.log('Created album with ID ', result);
  // console.log('Done! :)');
  return;
});

