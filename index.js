const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {	uri:	'http://egyankosh.ac.in/handle/123456789/3246',
	transform: function(body) {return cheerio.load(body);}
};

var arr = new Array()
l2('http://egyankosh.ac.in/handle/123456789/3246');

/*
rp(options)
	.then(($)=>{

			$('.list-group-item-heading').children('a').each(function(i,elm){
					//console.log('http://egyankosh.ac.in'+$(this).attr('href'))
					// Culrs basic page of PubAd from IGNOU website and forms an array having all the links to future levels
					arr.push('http://egyankosh.ac.in'+$(this).attr('href'));
					l2(arr[i]);
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
		});

*/
function l2(l2in){
if(l2in.length==0){console.log('Completed');}

	var opt={
url: l2in,
     transform: function(body) {return cheerio.load(body);}
	};
	rp(opt)
		.then(($)=>{

				$('.list-group-item-heading').children('a').each(function(i,elm){
						console.log($(this).attr('href'));
						
						l2('http://egyankosh.ac.in'+$(this).attr('href'));
});
				});
}

