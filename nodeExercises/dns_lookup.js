var fs = require('fs');
var readline = require('readline');
var dns = require('dns');

var rl = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

rl.question('Domain name: ', function(domain) {
  // var domain = domain;
  var ipAddress = 0;
  dns.lookup(domain, function(err, address){
    if (err) {
      console.error('invalid domain');
    }
    console.log('IP Address: ' + address);
    rl.close();
    return;
  });
});