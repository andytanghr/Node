var express = require('express');
var router = express.Router();

router.get('/feedback', function(req, res) {
  res.render('feedback', {
    pageTitle: 'Feedback',
    pageBody: 'feed(me)back',
    
  });
  // console.log('feedback routing works when /feedback loads'); // it does

});


module.exports = router;