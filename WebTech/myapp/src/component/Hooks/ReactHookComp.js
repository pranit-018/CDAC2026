import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ReactHookComp = () => {
    return (
        <div>
            <h1>This is ReactHook Comp</h1>
            <Link to="usestate" className='btn btn-danger btn-sm'>UseState</Link>{" "}
            <Link to="useeffect" className='btn btn-danger btn-sm'>UseEffect</Link>{" "}
            <Outlet></Outlet>
           
        </div>
    )
}

export default ReactHookComp
