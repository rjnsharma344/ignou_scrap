const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {	uri:	'http://egyankosh.ac.in/handle/123456789/3246',
	transform: function(body) {return cheerio.load(body);}
};

l2('http://egyankosh.ac.in/handle/123456789/3732');

function l2(l2in){
console.log('INPUT'+l2in)
	var opt={	url: l2in,
			transform: function(body) {return cheerio.load(body);}
	};

	rp(opt)
		.then(($)=>{
				console.log($('meta[name="citation_pdf_url"]').attr('content'));				
$('strong').each(function(i,elm){
if($(this).children('a').length!=0){				
				console.log($(this).children('a').attr('href'))
				console.log(i);
				l2('http://egyankosh.ac.in'+$(this).children('a').attr('href'));
}
				

});
});
}

