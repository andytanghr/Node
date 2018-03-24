var express = require('express');
var router = express.Router();

var catImages = [];

router.get('/cats', function(req, res) {
  var petData = req.app.get('animalData');
  petData.animals.forEach(function(item) {
    if (item.kind === 'cat') {
      catImages = catImages.concat(item.imgURL);
      console.log(catImages)
    }
  });
  
  res.render('cats', {
    pageTitle: 'I am the title of cats',
    pageBody: 'I am the body of cats',
    pagePhotos: catImages
  });

});

module.exports = router;

