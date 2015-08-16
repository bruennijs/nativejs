var console = require('console');
var util = require('util');

process.stdin.on('readable', function () {
  var data = process.stdin.read();
  console.info(util.format('>%s[%s]', data, typeof data));
});

/*
process.stdin.on('data', function (data) {
  console.info(util.format('>%s[%s]', data, typeof data));
})*/


