
// var urls = [
//   'https://en.wikipedia.org/wiki/Futures_and_promises',
//   'https://en.wikipedia.org/wiki/Continuation-passing_style',
//   'https://en.wikipedia.org/wiki/JavaScript',
//   'https://en.wikipedia.org/wiki/Node.js',
//   'https://en.wikipedia.org/wiki/Google_Chrome'
// ];

// var promise = require('bluebird');
// var cheerio = require('cheerio');
// var rp = require('request-promise');

// var options = {
//   uri: 'http://www.google.com/',
//   transform: function(body) {
//     return cheerio.load(body);
//   }
// };

// rp(options)
// .then((data) => {
//   console.log(data('title').text());
//   // console.log($);
// })
// .catch((err) => {
//   console.log(err);
// });


var express = require('express');
var app = express();
var rp = require('request-promise');
var cheerio = require('cheerio');

var options = {
  uri: 'http://www.berkshirehathaway.com',
  transform: (html) => {
    return cheerio.load(html);
  }
};

// web server scrapes a webpage when the server page is loaded, then sends scraped data back to server page

app.get('/scrape', (req, res) => {
  rp(options)
  .then((data) => {
    console.log(data('title').text());
    let scrapedTitle = data('title').text()
    res.send( 
      `
        <h1>${scrapedTitle} on the web</h1>
        
        ${data('html')}
        
      `
    );
  })
  .catch((err) => {
    console.log(err);
  });
  
});


var server = app.listen(3000, () => {
  console.log('scraping listening on port 3000');

});