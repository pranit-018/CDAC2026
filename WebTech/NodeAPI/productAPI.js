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
app.post('/products',(req,res,nex)=>{
    
    const {name,price,company,quantity} = req.body; //short version for the above 
    let insertQuery = `insert into products (name,price,company,quantity) values(?,?,?,?)`; //?=optional for the getting values
    con.query(insertQuery,[name,price,company,quantity],(error,result)=>{
        res.send(result);
    })
});


// update product
app.put("/products/:id", (req, res, next) => {
    // res.send("Testing Get request for products api");
    const {name,price,company,quantity} = req.body;
    let updatequery = `UPDATE products SET name=? , price=? ,  company=?, quantity=?  WHERE id = ${req.params.id}`;
    con.query(
        updatequery, [name,price,company,quantity], (error, result) => {
            if (error) throw error;
            res.send("Product Updated Successfully");
        }
    );
});















app.listen(port,()=>{
    console.log(`server is started on ${host}:${port}`)
});