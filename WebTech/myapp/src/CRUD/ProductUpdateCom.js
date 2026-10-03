import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const ProductUpdateCom = () => {

    const nav = useNavigate(); //to perform automatic navigation
    const { id } = useParams(); //to get id from url

    const [myproduct, setMyProduct] = useState({
        id: "",
        name: "",
        price: "",
        company: "",
        quantity: ""
    })

    const inputChangeHandler = (event) => {
        // const { type, name, value } = event.target;
        setMyProduct({...myproduct,[event.target.name]: event.target.value });
    }

    useEffect(() => {
        axios.get(`http://localhost:5050/products/${id}`).then((res) => {
            setMyProduct(...res.data);
        }).catch((error) => { })
    },[])

    const addData = (event) => {
        event.preventDefault(); //prevent from page updation

        axios.put(`http://localhost:5050/products/${id}`, myproduct).then(() => {
            window.alert("Product updated Successfully");
            nav("/dashboard/productdash");
        }).catch((error) => { });
    }





    return (
        <div>
            <h3> This is update product comp</h3>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
                    <form onSubmit={addData}>
                        {/* <label className='form-label'>Enter Product Name</label> */}
                        <b>Name:</b><input type='text' name="name" className='form-control' onChange={inputChangeHandler} value={myproduct.name} />

                        {/* <label className='form-label'>Enter Product Price</label> */}
                        <b>Price:</b><input type='text' name="price" className='form-control' onChange={inputChangeHandler} value={myproduct.price} />

                        {/* <label className='form-label'>Enter Product Company</label> */}
                        <b>Company:</b><input type='text' name="company" className='form-control' onChange={inputChangeHandler} value={myproduct.company} />

                        {/* <label className='form-label'>Enter Product Quantity</label> */}
                        <b>Quantity:</b> <input type='text' name="quantity" className='form-control' onChange={inputChangeHandler} value={myproduct.quantity} />

                        <button type="submit" className='btn btn-success mt-2'>Submit</button>

                    </form>
                </div>
                <div className='col-md-3'></div>
            </div>

        </div>
    )
}

export default ProductUpdateCom
