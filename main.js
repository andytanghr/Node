console.log('hello world');
var fs = require('fs'); // import IO module

var filename = 'test.txt';

// fs.readFile(filename, function (error, buffer) {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log('File Data: ', buffer.toString());
// });
 
// fs.writeFile(filename, 'I love Node', function(error) {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log('File Save: ', filename);

// });

var request = require('request');
var url = 'https://nodejs.org/en/';
request.get(url, function (error, response, html) {
  if (error) {
    console.error(error.message);
    return;
  }
  console.log(html);
});

