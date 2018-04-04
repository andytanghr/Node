var promise = require('bluebird');

var fs = require('fs');
var file = process.argv[2];

/*
fs.readFile(file, function(err, contents) { 
  if (err) {
    console.error(error.message);
    return;
  }
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
*/
var contents = fs.readFileSync(process.argv[2])
.then( () => {
  console.log(contents);
});
