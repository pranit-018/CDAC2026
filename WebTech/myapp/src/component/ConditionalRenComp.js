import React, { Component } from "react";

class ConditionalRen extends Component{

    constructor(props){
        super(props);
        this.state = {
            isCond:false
        }
    }


    render(){
        // let msg =""
        // if(this.state.isCond)
        // {
        //     // return <h2>Admin Login</h2>
        //     msg = "Admin Login";
        // }
        // else{
        //     // return <h2>User Login</h2>
        //     msg = "User Login";
        // }
        
        // return <h2>{msg}</h2>
        //3.use of ternary operator.
        // return (this.state.isCond)?<h2>Admin Login</h2>:<h2>User Login</h2>

        //4. short - circuit
        // return this.state.isCond || <h2>Admin Login</h2> //is condition is false then dispaly output.
        return !this.state.isCond && <h2>Admin Login</h2> //is condition is true then dispaly output.

    }
}

export default ConditionalRen;