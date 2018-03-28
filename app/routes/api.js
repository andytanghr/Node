var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');
var fs = require('fs');

// console.log('calling api.js routing loads when app.js starts'); // it works

router.get('/api', function(req, res) {
  // console.log('get is good when /api is loaded on browser'); // this works
  res.json(feedbackData);
});



router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body); //unshift from JSON array to get most recent first

  // writing to file to update JSON file
  fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);

    }
  });
  res.json(feedbackData);
});


module.exports = router;