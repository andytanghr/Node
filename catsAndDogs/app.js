var express = require('express');
var app = express(); // when to use Router()?

// set up templating/view engine
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// routing for each page
// index page
app.use(require('./routes/index.js')); // extension .js can be left out
// cats page
app.use(require('./routes/cats.js'));
// dogs page
app.use(require('./routes/dogs.js'));






// start server
var server = app.listen(3000, function() {
  console.log('Cats and dogs listening on port 3000!');
});