require('dotenv').config();
const express = require('express')  //it reurns function type of data so me store it like below statement
const bodyparser = require('body-parser')
const cors = require('cors')   //cross origin resourse sharing .(when multiple request are coming from the server so it will like act so it will my crash or give cros error so to handle that we use 'cors' library.)
const con = require('./connection');
const app = express();
//to connect or use middleware use method help us

app.use(bodyparser.urlencoded());
app.use(bodyparser.json({extended:true}));
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;
app.get('/',(req,res,next)=>{
    res.send("simple get request");
});

//1.naming routing
app.get('/user',(req,res,next)=>{
    // res.send("simple get request for user");
    con.query("select * from users",(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
});

//2.parametrize routing
app.get('/user/:id',(req,res,next)=>{
    // res.send(`simple get request for user with id: ${req.params.id}`);
    con.query(`select * from users where id=${req.params.id}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });

});

//3.delete request
app.delete('/user/:id',(req,res,nex)=>{
    // res.send("simple delete request for user");
    con.query(`delete from users where id= ${req.params.id}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });

});

//.post request but this is not allowed in this way//
app.post('/user/:id/:name/:post/:salary',(req,res,nex)=>{
    con.query(`insert into users values(${req.params.id},${req.params.name},${req.params.post}, ${req.params.salary})`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
});
//4.post request this is actully used
app.post('/user',(req,res,nex)=>{
    // let name= req.body.name;
    // let post = req.body.post;
    // let salary = req.body.salary;
    const {name,post,salary} = req.body; //short version for the above 
    let insertQuery = `insert into users (name,post,salary) values(?,?,?)`; //?=optional for the getting values
    con.query(insertQuery,[name,post,salary],(error,result)=>{
        res.send(result);
    })
});
//5.put request
app.put("/user/:id", (req, res, next) => {
  const { name, post, salary } = req.body;
  let updateQuery = `update users set name =?,post=?,salary=? where id=${req.params.id}`;
  con.query(updateQuery, [name, post, salary], (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});














app.listen(port,()=>{
    console.log(`server is started on ${host}:${port}`);
});