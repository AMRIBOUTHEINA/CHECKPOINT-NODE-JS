var fs = require('fs');

var filename = process.argv[2];

var bufFile = fs.readFileSync(filename);

var strFile = bufFile.toString();

var cnt = strFile.split('\n');

console.log(cnt.length-1);