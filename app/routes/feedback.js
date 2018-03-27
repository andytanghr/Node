var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res) {
  res.render('feedback', {
    pageTitle: 'feedback',
    pageBody: 'feed(me)back',
    
  });
  // console.log('the routing works');

});


module.exports = router;