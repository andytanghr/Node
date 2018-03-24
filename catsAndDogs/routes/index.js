var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', {
    pageTitle: 'I am the index title',
    pageBody: 'I am the body'

  });
});

module.exports = router;