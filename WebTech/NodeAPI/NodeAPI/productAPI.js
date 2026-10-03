require('dotenv').config();
const express = require('express');
const app = express();
const bodyparser= require('body-parser');
const cors = require('cors');
const con = require('./connection');


app.use(bodyparser.urlencoded());
app.use(bodyparser.json({extended:true}));
app.use(cors());

const port = process.env.PORT;
const host = process.env.HOST;

app.get('/',(req,res,next)=>{
   res.send("simple get request..")
})

//get
app.get('/products',(req,res,next)=>{
     con.query("select * from products",(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
});

app.get('/products/:id',(req,res,next)=>{
     con.query(`select * from products where id=${req.params.id}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
});

//delete

app.delete('/products/:id',(req,res,next)=>{
     con.query(`delete from products where id=${req.params.id}`,(error,result)=>{
        if(error) throw error;
        res.send(result);
    });
});

//post
app.post('/product',(req,res,nex)=>{
    // let name= req.body.name;
    // let post = req.body.post;
    // let salary = req.body.salary;
    const {name,price,company,quantity} = req.body; //short version for the above 
    let insertQuery = `insert into users (name,price,company,quantity) values(?,?,?,?)`; //?=optional for the getting values
    con.query(insertQuery,[name,price,company,quantity],(error,result)=>{
        res.send(result);
    })
});















app.listen(port,()=>{
    console.log(`server is started on ${host}:${port}`)
});