import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductAddComp = () => {

    const nav = useNavigate();   //automatically navigate to given location after updation
    const [myproduct,setMyProduct] = useState({
        name:"",
        price:"",
        company:"",
        quantity:""


    })

    const inputChangeHandler = (event)=>{
        const {type,name,value} = event.target;
        setMyProduct({...myproduct,[name]:value});
    }

    const addData = (event)=>{
        event.preventDefault(); //prevent from page updation

        axios.post("http://localhost:5050/products",myproduct).then(()=>{
            window.alert("Product Added Successfully");
            nav("/dashboard/productdash");
        }).catch((error)=>{});
    }






    return (

        <div>
            <h3>Enter The Product Details</h3> <hr/>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form onSubmit={addData}>
                        {/* <label className='form-label'>Enter Product Name</label> */}
                       <b>Name:</b><input type='text' name="name" className='form-control' onChange={inputChangeHandler} value={myproduct.name}/>

                        {/* <label className='form-label'>Enter Product Price</label> */}
                       <b>Price:</b><input type='text' name="price" className='form-control'  onChange={inputChangeHandler}  value={myproduct.price}  />

                        {/* <label className='form-label'>Enter Product Company</label> */}
                        <b>Company:</b><input type='text' name="company" className='form-control'  onChange={inputChangeHandler}  value={myproduct.company}/>

                        {/* <label className='form-label'>Enter Product Quantity</label> */}
                       <b>Quantity:</b> <input type='text' name="quantity" className='form-control'  onChange={inputChangeHandler}  value={myproduct.quantity}/>

                        <button type="submit" className='btn btn-success mt-2'>Submit</button>
                       
                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>

        </div>
    )
}

export default ProductAddComp
