import React, { useState } from 'react'
import imgPath from '../../shared/constant/constantData';

const UseStateHookComp = () => {

    const [myName,setMyName] = useState("Pranit");
    const [count,setCount] = useState(0);
    const [item,setItem] = useState(["Samosa","Dosa","Idali","Poha"]);
    const [phone,setPhone] = useState([
        {id:1, title:"Iphone17", path:imgPath.iphone17,price:80000},
        {id:2, title:"S24", path:imgPath.S24,price:60000},
        {id:3, title:"S24Ultra", path:imgPath.S24Ultra,price:120000},
        {id:4, title:"OnePlus13", path:imgPath.OnePlus13,price:30000}
    ])
    return (
        <div>
            <h2>This is UseState Hook</h2>
            <strong>Name:{myName}</strong> {"  "}
            <button type="button" className='btn btn-outline-primary' onClick={()=>setMyName("Pranit Vane")}>Change Name</button> <br />

            <hr />

             <strong>Count:{count}</strong>  {"  "}
            <button type="button" className='btn btn-outline-primary' onClick={()=>setCount(count +1)}>Increase Count</button>  <hr />

            <ul>
                {
                   item.length >0 && item.map((val,index)=>{
                        return <li key={index}>{val}</li>
                    })
                }
            </ul>

            <hr />
            <div className='d-flex flex-wrap gap-3'>

                {
                phone.length >0 && phone.map((val,index)=>{

                    return <div className='card border-primary' key={index} style={{width:"200px"} } >

                            <img src={val.path} alt={val.title} style={{width:"199px"}} />
                            <div className='card-body border-primary'>
                                <h3>Title:{val.title} <br/> Price:{val.price}₹</h3>

                            </div>
                        </div>
                })
            }

            </div>
            
            
        </div>
    )
}

export default UseStateHookComp;


