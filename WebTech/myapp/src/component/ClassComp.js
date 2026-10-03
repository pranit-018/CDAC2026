import React, { Component } from "react";

class ClassComp extends Component{
    render(){

        const {pname,price,company} =this.props;
        return <div>
            <h2>THis is class component</h2>
            <p>Product:{pname}<br /> Price:{price}<br /> Price:{company}</p>
        </div>
        // return <div>
        //     <h2>THis is class component</h2>
        //     <p>Product:{this.props.pname}<br /> Price:{this.props.price}<br /> Price:{this.props.company}</p>
        // </div>
    }
}

export default ClassComp;