var express = require('express');
var router = express.Router();

router.get('/dogs', function(req, res) {
  res.render('dogs', {
    pageTitle: 'Hello woof',
    pageBody: 'yes this is dog'
  });


});

module.exports = router;