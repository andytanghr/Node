var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var feedbackData = require('../data/feedback.json');
var fs = require('fs');

router.get('/api', function(req, res) {
  res.json(feedbackData);
  console.log('get is good');
});

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post('/api', function(req, res) {
  feedbackData.unshift(req.body); //unshift to get most recent first

  // writing to file to update JSON file
  fs.writeFile('../data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    if (err) {
      console.log(err);

    }
  });
  res.json(feedbackData);
});


module.exports = router;