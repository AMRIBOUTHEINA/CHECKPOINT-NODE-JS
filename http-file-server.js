let http = require("http")
let fs = require("fs")
const file = process.argv[3]
console.log(file)
http.createServer((req,res) => {
    fs.createReadStream(file).pipe(res)
}).listen(process.argv[2])