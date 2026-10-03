import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchData } from '../redux/apiSlice';



const UserListComp = () => {

    const  dispatch = useDispatch();
    const data =  useSelector((state)=>state.api.data);
    const status =  useSelector((state)=>state.api.status);
    const error =  useSelector((state)=>state.api.error);

    useEffect(()=>{
    if(status==='idle'){
            dispatch(fetchData());
        }
    },[status,dispatch]);

   let content=[];

    if(status ==='loading...')
    {
       content =  <div>Loading..</div>
    }
    else if(status==="Succeeded")
    {
        content = data;
    }
    else if(status==="Failed")
    {
        content = <div>{error}</div>
    }



    return (
        <div>
            <h2>This is User List </h2>
            <h1>This is User list comp</h1>
               <table className='table table-bordered'>
                <thead>
                    <tr>
                      <th>Id</th>  <th>Name</th><th>Post</th><th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       content.length >0 && content.map((val,index)=>{
                            return <tr key={index}>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.post}</td>
                                <td>{val.salary}</td>

                            
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default UserListComp;
