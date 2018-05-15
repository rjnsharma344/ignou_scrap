var rp = require('request-promise');
var options={
	uri: 'http://egyankosh.ac.in',
	resolveWithFullResponse: true
}

//rp(options)
//	.then(function(body){console.log(body)})

var fs = require('fs')
fs.readFile('ba','utf8',function(err,contents){
//console.log(contents);
var con = contents.toString().split('\n');
//console.log(con);
var j=0;
for (i in con){
	console.log(con[i]);
var opt={uri: con[i]}
rp(opt)
	.then(function(body){
//		console.log(body)
		fs.writeFile(j.toString(),body,function(err){
		console.log('Saved!' + j++)});
})

}
});

// Synchronous file reading
//var contents = fs.readFileSync('ba','utf8');
//console.log(contents);
