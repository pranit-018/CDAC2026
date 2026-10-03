import React, { Component } from "react";

class StateComp extends Component {

    constructor(props){
        super(props);
        this.state = {
            fname:"Pranit",
            sal:75000
        }
    }

    changeState = () =>{
        // this.setState({fname:"Pranit Vane", sal: this.state.sal +1000 })
        this.setState((prevstate)=>({fname:"Pranit Vane" , sal:prevstate.sal + 1000}))  //it is used in company prevstate = this.state
    }
    
    render(){
        return <div>
            <h1>This is State Componet</h1>
            <p>Name: <storng>{this.state.fname}</storng> <br />
               Salary: <storng>{this.state.sal}</storng> <br />
             </p>
               <button type="button" onClick={()=> this.changeState()}>Change Data</button>
               {/* it will be antother way directly writing method body in the onClick */}
               <br /> <br />
               <button type="button" onClick={()=>this.setState((prevstate)=>({fname:"Avi ", sal: prevstate.sal + 2000}))}>Change Name</button>
            
           
        </div>
    }
}


export default StateComp;