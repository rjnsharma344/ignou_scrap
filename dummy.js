const rp = require('request-promise');
const cheerio = require('cheerio');
path='down/';
func('http://egyankosh.ac.in/handle/123456789/3246');

function func(inp,l1,l2,l3){
if(l1&&l2&&l3){
l1=l1.trim();
l2=l2.trim();
l3=l3.trim();
//console.log(l1+' '+l2+' '+l3);
}
	var opt={	url: inp,
		transform: function(body) {return cheerio.load(body);}
	};
	rp(opt)
		.then(($)=>{

				$('.list-group-item-heading').children('a').each(function(i,elm){

if(!l1){func('http://egyankosh.ac.in'+$(this).attr('href'),$(this).text());}
if(l1){func('http://egyankosh.ac.in'+$(this).attr('href'),l1,$(this).text());}

//						console.log($(this).text())
						});

				if($('strong'!=null)){
				$('strong').each(function(i,elm){
						if($(this).children('a').length!=0){				
						func('http://egyankosh.ac.in'+$(this).children('a').attr('href'),l1,l2,$(this).children('a').text());
						}
						});

				}

				if($('meta[name="citation_pdf_url"]').length==1){
				console.log(l1+' '+l2+' '+l3);
				console.log($('meta[name="citation_pdf_url"]').attr('content'));				
				}

				});
}

