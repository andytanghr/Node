var express = require('express');
var app = express();


app.get('/', function(req, res) {
  res.send('Hello, world!');
});

app.get('/cats', function(req, res) {
  res.send('Meow');

});

app.get('/dogs', function(req, res) {
  res.send('Woof');
});

app.get('/cats_and_dogs', function(req, res) {
  res.send('Living together');
});

app.get('/greet/:name', function(req, res) { // routing parameter method
  var name = req.params.name;
  res.send('Hello, ' + name + '!');
});

app.get('/year', function(req, res) { // query string parameter method
  var age = req.query.age;
  var year = new Date().getFullYear();
  age = year - age;
  res.send('You were born in ' + age + '.');
});

// examples of routing and query parameter methods: https://stackoverflow.com/questions/17007997/how-to-access-the-get-parameters-after-in-express/38201623#38201623
// Both routing and query:
/*
Both in single example

app.get('/sample/:id', function(req, res) {

 var id = req.params.id; //or use req.param('id')
 var id2 = req.query.id; 
  ................
});
Post link example example : http://localhost:port/sample/123?id=123
*/

app.listen(3000, function() {
  console.log('Express exercises started on port 3000!');
});