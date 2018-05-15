const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
	uri:	'http://egyankosh.ac.in/handle/123456789/3246',
	transform: function(body) {
//		console.log(body)
		return cheerio.load(body);
	}
};

var arr = new Array()

rp(options)
	.then(($)=>{

$('.list-group-item-heading').children('a').each(function(i,elm){
//console.log('http://egyankosh.ac.in'+$(this).attr('href'))

arr.push('http://egyankosh.ac.in'+$(this).attr('href'));
//console.log(arr);
if(i==$('.list-group-item-heading').children('a').length-1)
{
console.log($('.list-group-item-heading').children('a').length +'-'+ i);
console.log('Finished')
console.log(arr);

}

})



})
	.catch((err)=>{
		console.log(err);
})
;


