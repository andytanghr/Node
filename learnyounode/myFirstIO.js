let fs = require('fs');

var contents = fs.readFileSync(process.argv[2]); 

var stringedContents = contents.toString();
  let newLineCount = 0;
  for (let i = 0; i < stringedContents.length; i++) {
    if (stringedContents[i] === '\n') {
      newLineCount++;
    }
  }
  console.log(newLineCount);
/*
var lines = contents.toString().split('\n').length - 1
console.log(lines)
*/