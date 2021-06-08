var http = require('http');
var inputUrl = process.argv[2];  
http.get(inputUrl, function(response){
  
  response.on('error', console.error);
  
  response.setEncoding('utf8');
  
  var dataArr = [];
  
  response.on('data', function(data){
    dataArr.push(data);
  })
  response.on('end', function(){
    var result = dataArr.join('')
    console.log(result.length);
    console.log(result);
  })

});
