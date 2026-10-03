import React, { Component } from 'react'
import imgPath from '../shared/constant/constantData'


export default class ToggleImgCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currImg:imgPath.iphone17

        }
    }


    toggle = ()=>{
        this.setState((prev)=>({
            currImg:prev.currImg===imgPath.iphone17?imgPath.S24:imgPath.iphone17
        }))
    }
    
    render() {
        return (
            <div>
                <h1>Toggle image</h1>
                <img src={this.state.currImg} alt='CurrentImg'/>
                <button type="button" onClick={()=>this.toggle()}>Toggle</button>
            </div>
        )
    }
}

