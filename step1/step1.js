var fs = require('fs');
var xmlparser = require('./xmlparser');
var x = xmlparser.x;
var data = fs.readFileSync('stations.html').toString();
var tree = xmlparser.parser(data);

console.log(tree.root);
console.log(x(tree.root,'tbody').children);