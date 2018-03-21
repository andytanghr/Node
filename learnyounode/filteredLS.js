var fs = require('fs');
var path = require('path'); // module to grab the file extension, .extname
var directory = process.argv[2]; // directory path grabbed from second cmd line argument
var extension = '.' + process.argv[3]; // prefixed '.' and the extname is grabbed from the third cmd line argument

fs.readdir(directory, function(err, files) {
  if (err) {
    console.error(error.message);
  }
  files.forEach(function(file) {
    if (path.extname(file) === extension) {
      console.log(file);
    }
  });
});