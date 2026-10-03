const { error } = require('console');
const fs = require('fs');

fs.unlink("./writefile1.txt",(error,result)=>{
    console.log("file deleted successfully");
});

//mkdir : it is used to create new directory(folder);

// fs.mkdir("./newDir1",(error,res)=>{
//     console.log("new Directory created successfully");
// });

fs.mkdir("./newDir2",(error,res)=>{
   fs.writeFile("./newDir2/Hello.html","<h1>Hello welcome to this</h1>",(error,res)=>{
     console.log("new Directory and file created..")
   })
})

//delete directory
// fs.rmdir("./newDir2",(error,result)=>{
//     console.log("file deleted successfully");
// });