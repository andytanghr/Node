var express = require('express');
var router = express.Router();


var pagePhotos = [];

router.get('/', function(req, res) {
  var data = req.app.get('appData'); //grabs globally appData from app.js
  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });


  res.render('index', {
    pageTitle: 'I am the index title',
    pageBody: 'I am the body ok',
    // artwork: pagePhotos

  });

  // console.log(pagePhotos);

});

module.exports = router;



  // res.send(
  //   `
  //   <link rel="stylesheet" type="text/css" href="css/styles.css">
  //   <h2>Welcome!</h2>
  //   <p>DigitalCrafts 16 Week Boot Camp</p>

  //   <script src="/reload/reload.js"></script> <!-- this is to let the page refresh after a saved edit -->

  //   `


