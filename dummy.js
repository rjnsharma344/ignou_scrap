const rp = require('request-promise');
const cheerio = require('cheerio');
const fs = require('fs');
path='down/';
func('http://egyankosh.ac.in/handle/123456789/3246');
checkdir(path);

function checkdir(path_to_dir){
	if(fs.existsSync(path_to_dir)){//console.log("Path exists");
	}
	else{
		console.log(path_to_dir+"Path doesn't exist.. Creating");
		fs.mkdirSync(path_to_dir);
	}
}

function func(inp,l1,l2){
	if(l1){
		checkdir(l1);
	}
	var opt={	url: inp,
		transform: function(body) {return cheerio.load(body);}
	};
	rp(opt)
		.then(($)=>{

				$('.list-group-item-heading').children('a').each(function(i,elm){
						if(!l1){func('http://egyankosh.ac.in'+$(this).attr('href'),path+$(this).text().trim());}
						if(l1){func('http://egyankosh.ac.in'+$(this).attr('href'),l1+'/'+$(this).text().trim());}
						});

				if($('strong'!=null)){
				$('strong').each(function(i,elm){
						if($(this).children('a').length!=0){				
						func('http://egyankosh.ac.in'+$(this).children('a').attr('href'),l1,$(this).children('a').text().trim());
						}
						});

				}

				if($('meta[name="citation_pdf_url"]').length==1){
				down_path=l1+'/'+l2+'.pdf';
				console.log(down_path);
				console.log($('meta[name="citation_pdf_url"]').attr('content'));
				}

		});
}

