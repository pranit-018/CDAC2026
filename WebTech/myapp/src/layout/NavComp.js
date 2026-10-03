import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    return (
        <div>
            <header className='text-success'>Welcome to our App</header>
            <Link to='carousel' className='btn btn-primary btn-sm'>Carousel</Link> {"   "}
            <Link to='list' className='btn btn-primary btn-sm'>List</Link> {"   "}
            <Link to='myimages' className='btn btn-primary btn-sm'>Images</Link> {"   "}
            <Link to='myform' className='btn btn-primary btn-sm'>Form</Link> {"   "}
            <Link to='hooks' className='btn btn-primary btn-sm'>hooks</Link>  {"   "}
            <Link to='productdash' className='btn btn-primary btn-sm'>Product Dash</Link>  {"   "}
            <Link to='productadd' className='btn btn-primary btn-sm'>Product Add</Link>  {"   "}
            <Link to='productupdate' className='btn btn-primary btn-sm'>Product Update</Link>  {"   "}
            <Link to='userlist' className='btn btn-primary btn-sm'>User List</Link>  {"   "}
        </div>
    )
}

export default NavComp
