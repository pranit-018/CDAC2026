    import React from 'react'

    const UserComp = (props) => {
    if(props.user==="Pranit"){
            throw Error("Not a Admin User")
    }

    return <h2>This is user : {props.user}</h2>
    }

    export default UserComp;
