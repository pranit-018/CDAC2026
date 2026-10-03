import React, { Component } from "react";

class MyCounter extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
        render(){
        return <div>
            <h1>This is Counter</h1>
            <p>Name: <storng>{this.state.count}</storng> <br />
               
             </p>
               
               <br /> <br />
               <button type="button" onClick={()=>this.setState((prevstate)=>({count: prevstate.count + 1}))}>Count++</button> {"     "} {"     "}

               
               <button type="button" onClick={()=>this.setState((prevstate)=>({count: prevstate.count - 1}))}>Count--</button>

                {"          "} {"          "}
               <button type="button" onClick={()=>this.setState((prevstate)=>({count: prevstate.count =0}))}>Reset Count</button>
            
           
        </div>
    }
    
}

export default MyCounter;