var express = require('express');
var app = express();
var promise = require('bluebird');
const bodyParser = require('body-parser'); // to process form data


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended :false}))

// defined the options for the pg-promise library
var options = {
  promiseLib : promise
}

// configuring the pg-promise database connection
var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/testdishes'; // to connect to db, port 5432 is postgres default
var db = pgp(connectionString);



//public folder
app.use(express.static('app/public'));

app.get('/newdish',function(req,res){
  res.render('newdish');
});

app.post('/dishes',function(req,res){ //POST from newdish leads here

    let title = req.body.title; // grabbed from POSTed to /dishes header
    let description = req.body.description;
    let price = parseInt(req.body.price);
    let course = req.body.course;
    let imageURL = req.body.imageURL;
  
    // db query expecting back no rows; just one action, INSERT
    // values($1, $2, etc.) uses dollar sign selector to insert from array structure later in the line; postgres has 1-based indexing
    db.none('INSERT INTO dishes(title,description,price,course,"imageURL") values($1,$2,$3,$4,$5)',[title,description,price,course,imageURL]).then(function(){
  
      db.any('SELECT * FROM dishes').then(function(data){ // data was returned 'SELECT * FROM dishes' all rows of db which is then rendered
        // res.render(page to render, object to pass to the page)
        res.render('dishes', {'dishes' : data});
      })
  
    })// end of 'then' promise
  
  })
  
  app.get('/dishes',function(req,res){ // this is if user goes to /dishes on their own, not after entering the survey form from /newdish
  
    // fetch dishes from the database
    db.any('SELECT * FROM dishes').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.render('dishes',{'dishes' : data});
    })
  })
  
  app.get('/dishes/json',function(req,res){ // to grab the JSON data manually; a way to test that API works
  
    // fetch dishes from the database
    db.any('SELECT * FROM dishes').then(function(data){
      // res.render(page to render, object to pass to the page)
      res.status(200).json({
        status : 'success',
        dishes : data
      })
    })
  
  })
  
  app.get('/',function(req,res){
    res.send('hello world');
  })

var server = app.listen(3000, function(){
    console.log('Example app listening on port 3000 ');
});