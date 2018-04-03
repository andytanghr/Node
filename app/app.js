var express = require('express');
var app = express();
var dataFile = require('./data/data.json');
var animalData = require('./data/animals.json');
var reload = require('reload');
var http = require('http').Server(app); // imports Node's http module and starts an HTTP server

// adding chat feature
var http = require('http').Server(app);
var io = require('socket.io')(http);

// sets environmental variables for the entire app, globally
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // second property: 'app/views' vs 'views', app/views doesn't work for me???
app.set('appData', dataFile);
app.set('animalData', animalData);

// console.log(__dirname + '/views');

// public folder in reference to root folder, and other routing info
app.use(express.static('./public'));
app.use(require('./routes/index')); //to tell app.js where routes are...in index.js
app.use(require('./routes/pets'));
app.use(require('./routes/cats'));
app.use(require('./routes/dogs'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));

// app.use(require('./routes/speaker')); // this is the speaker





var server = app.listen(3000, function() {

  console.log('Cats and dogs app listening on port 3000');
});

reload(server, app);


