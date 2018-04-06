
// var promise = require('bluebird');

var fs = require('fs');
var file = process.argv[2];


fs.readFile(file, function(err, contents) { 
  if (err) {
    console.error(error.message);
    return;
  }
  var contents = contents.toString();
  console.log('here are the contents:\n',contents);
});


/*
var contents = fs.readFileSync(process.argv[2]);
contents = contents.toString();
console.log('here are the contents:\n',contents)

Promise.resolve()
  .then( (contents) => {
    
    console.log(typeof contents);
  });
*/