var http = require('http');

var urls = process.argv.slice(2, process.argv.length);
var countDown = urls.length;

var requestResults = [];

urls.map(function(currentUrl, index, array){

	var mapping = { index: ''}
	http.get(currentUrl,function(response){
		response.setEncoding('utf8');

		response.on('error', console.error);
		var str = '';
		response.on('data', function(data){
			str += data
		});

		response.on('end', function(){

			requestResults[index] = str
			countDown--;

			if(countDown === 0){

				requestResults.map(function(result){
					console.log(result);
				});
			}
			
		});
	});

});
