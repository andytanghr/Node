var Sequelize = require('sequelize');
const connection = new Sequelize('postgres://localhost:5432/seqClassdb');

// to define a table called 'article'
// var Article = connection.define('article', // second param is to define attributes of the table: column titles as key, data types as values
// {
//   title: Sequelize.STRING,
//   body: Sequelize.TEXT
// });


// to define a table called 'article', long form to specify more attributes to the columns of the created table
var Article = connection.define('article', // second param is to define attributes of the table: column titles as key, data types as values
{
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  body: {
    type: Sequelize.TEXT,
    defaultValue: 'DigitalCrafts'
  }
}, 
{ // third parameter of define: options to the table
  timestamps: false // to drop timestamps from columns
});

connection.sync( {
  // force: true // to delete/drop table
});

// this will write, update, etc. to the db server
connection.sync().then( () => {
  // to create a record in table Article
  // Article.create({  
  //   title: 'hello world',
  //   body: 'lorem ipsum dolor sit amet, consecutur'
  // });

  // to query db by ID
  // Article.findById(2).then( (entry) => {
  //   console.log(entry.dataValues);
  // });

  // to query by finding all
  // Article.findAll().then( (entries) => {
  //   console.log(entries.length + ' articles in the db');
  //   // to get specific part of record, here from the body column
  //   var r = entries[0];
  //   console.log(r.body);
  // });

  

});