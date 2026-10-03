const path = require('path');   //importing the core modul path
const os = require('os');


// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__dirname)); //directry base name
// console.log(path.basename(__filename)); //give the name of file
// console.log(path.extname(__filename));//gives the name of extension .js
// // console.log(path.relative(__filename));
// console.log(path.isAbsolute(__filename));//true
// console.log(path.isAbsolute("../"+__filename));//making the path relative
// console.log(path.join(__filename,"../myFile.js"));//used to join two different path


//2.os modul

console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.cpus());