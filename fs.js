var fs = require('fs');
var exec= require('child_process').exec;
var path='down/';
if(fs.existsSync(path)){
console.log("Path exists");
}
