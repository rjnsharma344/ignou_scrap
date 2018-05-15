const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
	uri:	'http://egyankosh.ac.in/handle/123456789/3246',
	transform: function(body) {
//		console.log(body)
		return cheerio.load(body);
	}
};


rp(options)
	.then(($)=>{
//log the rp output
//operate with the rp here
//console.log($)
//console.log($('.list-group-item-heading').html())
//console.log('----------------');
//console.log($('.list-group').children('.list-group-item-heading').text())

//console.log($('.list-group').html())
//console.log('-----------------')

$('.list-group-item-heading').children('a').each(function(i,elm){
console.log('http://egyankosh.ac.in'+$(this).attr('href'))

})

//.each((l1)=>{console.log(l1)}));


})
	.catch((err)=>{
		console.log(err);
})
;


