import React, { Component } from "react";
import ChaildComp from "./ChildCompFun";
import PureComp from "./PureComp";
import MemoComp from "./MemoComp";

class ParentComp extends Component{


    constructor(props){
        super(props);
        this.state = {
            item:"Samosa",
            price:25
        }
    }
    changeData= ()=>{
        this.setState((prevState)=>({item:"Samosa Pav" , price:prevState.price+5}));
    }




    render(){
        console.log("Parent componet rader.")
        const {item,price}=this.state;
        return <div>
            <h1>This is parent comp</h1>
            <div>Item:<strong>{item}</strong></div>
            <div>Price:<strong>{price}</strong></div>
            <button type="button" onClick={()=>this.changeData()}>Change Data</button>
            <hr/>

            <ChaildComp newItem={item} newPrice={price} parentmethod={this.changeData}></ChaildComp>
            <PureComp newItem={this.state.item}></PureComp>
            <MemoComp newIteam ={this.state.item}/>

        </div>
    }
}

export default ParentComp;