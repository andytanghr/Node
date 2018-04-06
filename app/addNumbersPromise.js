/* original code structure
addNumbers(x, y)
  .then( (answer) => {
    console.log( answer );
  })
  .catch( (error)  => {
    console.log( error );
  });
*/

/* this works but two Promises are created
const addNumbers = (x, y) => {
  if (typeof x !== 'number' || typeof y !== 'number') {
    return new Promise( (resolve, reject) => {
      reject('Nope, NaN!');
    })
  };
  return new Promise( (resolve, reject) => {
    resolve(x + y);
  });
}
*/

// works with only one Promise, testing how the resolve and reject are returned
const addNumbers = (x, y) => {
  return new Promise( (resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject('Nope, NaN!');
    }
    resolve(x + y); 
  });
}


addNumbers(1, '21')
  .then( (result) => {
    console.log(result);
    console.log('works');
  })
  .catch( (error) => {
    console.log(error + ' got rejected');
  });
