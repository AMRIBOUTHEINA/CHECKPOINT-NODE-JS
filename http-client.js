let http = require('http')
 
http.get(process.argv[2],(res)=>{
  res.setEncoding('utf-8')
  res.on('error',(error)=>{
      return console.error(error)
  })
  res.on("data",(data)=>{
      console.log(data)
  })
}).on("error",console.error)