var express = require('express');
var dataFile = require('./data/data.json');

var app = express();

// console.log(dataFile);

app.get('/speakers/:speakerid', function(req, res) {

  var speaker = dataFile.speakers[req.params.speakerid];

  res.send(
    `
      <h1>Speakers</h1>
      <li>
      <h1>${speaker.title}</h1>
      <h2>${speaker.name}</h2>
      <p>${speaker.summary}</p>
      </li>
    `
  );

  /*  // this displayed all the speakers in a list
  var info = '';
  dataFile.speakers.forEach(function(item) {

    info += ` 
      <li>
      <h2>${item.name}</h2>
      <p>${item.summary}<p>
      </li>
    `; // multiline string aka template literal

  }); // end of forEach loop

  res.send(
  `
    <h1>Speakers</h1>
    ${info}
  `

  ); // end of res.send


  */



}); // end of app.get


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');

});