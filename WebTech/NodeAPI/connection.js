var mysql      = require('mysql');
var con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'ycpdb'
});

con.connect((error)=>{
    if(error) throw error;
    console.log("database connection done");
});

module.exports = con;