import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

const ProductDashComp = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get("http://localhost:5050/products").then((res) => {
            // console.log(res.data);
            setProducts(res.data);
        }).catch((error) => { })
    }

    const deleProduct = (id) => {
        // console.log(pid);
        if (window.confirm(`Are you sure you want to delete product with id:${id}`)) {
            axios.delete(`http://localhost:5050/products/${id}`).then(() => {
                window.alert("Product Deleted Successfully");
                getData();
            }).catch((error) => { });
        }
    }
    return (
        <div>
            <h2>This is ProductDashComp</h2>
            <Link to="/dashboard/productadd" className='btn btn-primary  mt-2 mb-2 mx-2'>
            <AddIcon></AddIcon> Product Add</Link>
            <table border={5}>
                <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: '5px' }}>PID</th>
                        <th style={{ border: "1px solid black", padding: '5px' }}>Name</th>
                        <th style={{ border: "1px solid black", padding: '5px' }}>Price</th>
                        <th style={{ border: "1px solid black", padding: '5px' }}>QTY</th>
                        <th style={{ border: "1px solid black", padding: '5px' }}>Company</th>
                        <th style={{ border: "1px solid black", padding: '5px' }}>Action</th>
                    </tr>
                </thead>
                <tbody>{

                    products.map((val, index) => {
                        return <tr key={index}>
                            <td style={{ border: "1px solid black", padding: '5px' }}>{val.id}</td>
                            <td style={{ border: "1px solid black", padding: '5px' }}>{val.name}</td>
                            <td style={{ border: "1px solid black", padding: '5px' }}>{val.price}</td>
                            <td style={{ border: "1px solid black", padding: '5px' }}>{val.quantity}</td>
                            <td style={{ border: "1px solid black", padding: '5px' }}>{val.company}</td>
                            <td style={{ border: "1px solid black", padding: '5px' }}>
                                <button type='button' onClick={() => deleProduct(val.id)} className='btn btn-outline-danger btn-sm'>
                                    <DeleteForeverIcon ></DeleteForeverIcon>
                                </button>
                                <Link to={`/dashboard/productupdate/${val.id}`} className='btn btn-outline-success btn-sm'>Edit</Link>
                            </td>

                        </tr>
                    })

                }
                </tbody>


            </table>
        </div>
    )
}

export default ProductDashComp;