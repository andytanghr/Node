var express = require('express');
var dataFile = require('./data/data.json');
var animalData = require('./data/animals.json');
var app = express();
var reload = require('reload');

// sets environmental variables for the entire app, globally
app.set('view engine', 'ejs');
app.set('views', './views'); // second property: 'app/views' vs 'views', app/views doesn't work for me???
app.set('appData', dataFile);
app.set('animalData', animalData);


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

  console.log('Example app listening on port 3000');
});

reload(server, app);


