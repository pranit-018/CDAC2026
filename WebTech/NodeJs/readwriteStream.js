var fs = require('fs');
var myreadStream = fs.createReadStream(__dirname+'./writefile2.txt',"utf-8");
var mywirteStream =  fs.createWriteStream(__dirname+'./writefile3.txt');

myreadStream.on("data",(chunk)=>{
    console.log(chunk);
    mywirteStream.write(chunk);
})