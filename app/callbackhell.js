// const addNumbers = (x, y) => {
//   new Promise( (resolve, reject) => {
//     if (typeof x !== 'number' && typeof y !== 'number') {
//       reject('Not a number!');
//     }
//     resolve(x + y);
//   });
// }


// this works but no rejects are caught?
// const addNumbers = (x, y) => {
//   if (typeof x !== 'number' && typeof y !== 'number') {
//     var error = 'Not a number!';
//   } 
//   return new Promise( (resolve, reject) => {
//     resolve(x + y);
//   });
// }

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

addNumbers(1, '21')
  .then( (result) => {
    console.log(result);
    console.log('works');
  })
  .catch( (error) => {
    console.log(error + ' got rejected');
  });