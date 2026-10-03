import React, { Component } from "react";

class FriendsDetails extends Component{
    render(){

        const {name,contact,gender,address} =this.props;
        return <div>
            <h2>Friends Details</h2>
            <p>Name:{name} <br />Contact:{contact} <br />  Gender:{gender} <br />  Address:{address}</p>
        </div>
     
    }
}

export default FriendsDetails;