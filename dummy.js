const rp = require('request-promise');
const cheerio = require('cheerio');

func('http://egyankosh.ac.in/handle/123456789/3246');

function func(inp,l1,l2,l3,l4){
	var opt={	url: inp,
			transform: function(body) {return cheerio.load(body);}
	};
	rp(opt)
		.then(($)=>{

				$('.list-group-item-heading').children('a').each(function(i,elm){
						func('http://egyankosh.ac.in'+$(this).attr('href'));
});

if($('strong'!=null)){
				$('strong').each(function(i,elm){
if($(this).children('a').length!=0){				
				func('http://egyankosh.ac.in'+$(this).children('a').attr('href'));
}
				});
						
}

if($('meta[name="citation_pdf_url"]').length==1){
				console.log($('meta[name="citation_pdf_url"]').attr('content'));				
}

				});
}

