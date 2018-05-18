const http = require('http');
const fs = require('fs');
var file = fs.createWriteStream("test.pdf");
var url = 'http://egyankosh.ac.in//bitstream/123456789/19088/1/Unit-5.pdf';
var request = http.get(url,function(response){response.pipe(file)});
