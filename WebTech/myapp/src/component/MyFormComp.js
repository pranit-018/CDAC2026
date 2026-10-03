import React, { useState } from 'react'

const MyFormComp = () => {
    const [user,setUser] = useState({
        uname:"",
        upass:"",
        term:""
    });

    const inputchangehandler = (event)=>{
        const {type,name,value} = event.target;
        setUser({...user,[name]:value});
        
    }

    const checkData = (event)=>{
        event.preventDefault();
        if(user.uname==="" ){
            window.alert("Enter the user name");
            return false
        }
        if(!user.uname.match(/^[a-zA-Z ]{3,20}$/)){
            window.alert("Enter only characters with min-3 and max-20")
            return false
        }
        if(user.upass==="" ){
            window.alert("Enter Password");
            return false
        }
        if(!user.upass.match(/^[a-zA-Z0-9 ]{6,20}$/)){
            window.alert("Password Must be 6 characters long")
            return false
        }
        window.alert(JSON.stringify(user));
    }

  return (
    <div>
      <h2>This is MyFormComp</h2>
      <form onSubmit={checkData}>
        <label className='form-label'>Enter User Name:</label>{""}
        <input type='text' name='uname' onChange={inputchangehandler} value={user.uname}/><br/> <br/>

        <label>Password:</label>{""}
        <input type='text' name='uname' onChange={inputchangehandler} value={user.upass}/><br/>


        <button type='submit' className='btn btn-success btn-sm mt-2'>Submit</button>

      </form>
    </div>
  )
}

export default MyFormComp