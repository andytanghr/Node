/* original code
addNumbers(x, y)
  .then( (answer) => {
    console.log( answer );
  })
  .catch( (error)  => {
    console.log( error );
  });
*/


// function addNumbers(a, b) {

//   }
// };

// var addNumbers = (x, y) => {
//   if (typeof x === 'number' && typeof y === 'number') {
//     return x + y;
//   };

// var addNumbersPromise = addNumbers(1, 3);
// addNumbersPromise()
//   .then( (answer) => {
//     console.log(answer);
//   })
//   .catch( (error) => {
//     console.log(error);
//   });
// };


function addNumbers(x, y) {
  console.log('this works');
  return x + y;
}

var addNumbersPromise = addNumbers(1, 4);
addNumbersPromise
  .then( (answer) => {
    console.log(answer);
  })
  .catch( (error) => {
    console.log(error);
  });


// var addNumbersPromise = new Promise( function(resolve, reject) {
//   var n = addNumbers()

// });


// console.log( addNumbers(1, 3) );



/*
var addNumbers = new Promise ( (resolve, reject) => {
  var added = x + y;
  if (typeof x === 'number' && typeof y === 'number') {
    resolve(added);
  }
  else {
    reject(Errpr('x and y are not numbers'));
  }
});
   
addNumbers
  .then( (result) => {
  catch()

});


  (x, y) => {
  if (typeof x === 'number' && typeof y === 'number') {
    return x + y;
  }

  .then( (answer) => {
    console.log(answer);
  })
  .catch( (error) => {
    console.log(error);
  });
};
*/