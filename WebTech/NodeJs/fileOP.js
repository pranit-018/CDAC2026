const fs = require('fs');

//read and write file synchronously.
// let wData = fs.writeFileSync('./writefile1.txt',"hello friends how are you all");
// let readData = fs.readFileSync('./writefile1.txt',"utf8");
// console.log(readData);

// fs.appendFileSync('./writefile1.txt',"\n When are you going for trip");

fs.writeFile("./weitefile2.txt","Good Afternoon You all",(error,result)=>{
    result= "Data Fetch successfully.";
})
fs.readFile("./writefile2.txt","utf-8",(error,result)=>{
    if(error!=null)
    {
        console.log("file read successfully: " + result);
    }
    else{
        console.log(error.message);
    }
})

