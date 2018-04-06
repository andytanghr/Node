let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

  let added = 1 + 3;
  if (typeof added === 'number') {
    resolve(added);
  } else {
    reject('NaN');
  }
});

promiseToCleanTheRoom
  .then(function (result) {
    console.log('it is added!');
    console.log(result);
  })
  .catch( (error) => {
    console.log(error, ' not a number');
  });


  