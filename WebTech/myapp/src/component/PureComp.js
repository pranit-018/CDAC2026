import React, { Component, PureComponent } from "react";

class PureComp extends PureComponent
{
    render(){
        console.log("pure component render");
        return (
            <div>
                <h2>This is Pure Comp</h2>
                <div>Items: <strong>{this.props.newItems}</strong></div>
            </div>
        )
    }
}

export default PureComp;