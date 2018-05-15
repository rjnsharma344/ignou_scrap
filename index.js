const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {	uri:	'http://egyankosh.ac.in/handle/123456789/3246',
	transform: function(body) {return cheerio.load(body);}
};

l2('http://egyankosh.ac.in/handle/123456789/3246');

function l2(l2in){
//if(l2in=='http://egyankosh.ac.in'){console.log('Completed');}
//console.log(l2in);
// Since there will be no list-group-item-heading class on last file there is no need for special terminate check
	var opt={	url: l2in,
			transform: function(body) {return cheerio.load(body);}
	};
	rp(opt)
		.then(($)=>{

				$('.list-group-item-heading').children('a').each(function(i,elm){
//						console.log($(this).attr('href'));
						l2('http://egyankosh.ac.in'+$(this).attr('href'));
});

if($('strong'!=null)){
//				console.log($('strong').html());				
				$('strong').each(function(i,elm){
if($(this).children('a').length!=0){				
				l2('http://egyankosh.ac.in'+$(this).children('a').attr('href'));
}
				});
						
//only immediate children are found using children. To find grand children find is used
}

if($('meta[name="citation_pdf_url"]').length==1){
				console.log($('meta[name="citation_pdf_url"]').attr('content'));				
// the final destination
}

				});
}

