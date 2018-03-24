var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('filename: ', function(filename) {
  var filename = filename;
  fs.readFile(filename, function(err, buff) {
    if (err) {
      console.error('EN0ENT: no such file or directory, open ' + filename)
      return;
    }
    console.log(buff.toString().toUpperCase());
    rl.close();
    return;
  });
});


