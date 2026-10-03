import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isCond:false
        }
    }
    

    static getDerivedStateFromError(){
        return{
            isCond:true
        }
    }


    //to display error in the console.
    componentDidCatch(error){
        console.log(error);
    }




    render() {
        if(this.state.isCond)
        {
            return <p>Not a User</p>
        }

        return this.props.children;
    }
}

export default ErrorBoundry;
