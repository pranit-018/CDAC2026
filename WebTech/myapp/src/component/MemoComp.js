import React from "react";
const MemoComp = (props) =>{
    console.log("memo component render.")
    return(

        <div>
            <h2>MemoComp</h2>
            <div>Item:<b>{props.newItem}</b></div>
        </div>
    )
}


export default React.memo(MemoComp);