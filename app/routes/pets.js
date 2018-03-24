var express = require('express');
var router = express.Router();

var petImages = [];

router.get('/pets', function(req, res) {
  var petData = req.app.get('animalData');
  petData.animals.forEach(function(item) {
    petImages = petImages.concat(item.imgURL);
  });

  res.render('pets', {
    pageTitle: 'all the pets',
    pageBody: 'all the pets are here',
    pagePhotos: petImages
  });



});


 module.exports = router;