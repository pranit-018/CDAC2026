import React, { useEffect, useState } from 'react'

const UseEffectHookComp = () => {
    const [age,setAge] = useState(18);
    const [sal,setSal] = useState(40000);

    // case1:
    // useEffect(()=>{
    //     setAge(age+1)
    // });

    // case2
    useEffect(()=>{
        setAge(age+1)
    },[]);

    // case3 when dependency value pass as state or props
    // useEffect(()=>{
    //     setAge(age+1)
    // },[sal]);
    


  return (
    <div>
      <h2>This UseEffectHookComp</h2>
      <strong>Age: {age}</strong><br/>
      <strong>Salary: {sal}</strong><br/>
      <button type='button' onClick={()=>setSal(sal+1000)}>change sal</button>

    </div>
  )
}

export default UseEffectHookComp;