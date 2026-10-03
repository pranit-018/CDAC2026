import React from "react";
import imgPath from "../shared/constant/constantData";


const MyImages = ()=>{

    return (
        <div>
            <h2>My Images Component</h2>
            <img src={imgPath.iphone17} alt="iPhone" height="200px" width="300px" ></img>
            <img src={imgPath.A56} alt="A56" height="200px" width="300px"></img>
            <img src={imgPath.Pixel} alt="Pixel" height="200px" width="300px"></img>
            <img src={imgPath.S24} alt="S24" height="200px" width="300px"></img>
            <img src={imgPath.S24Ultra} alt="S24 Ultra" height="200px" width="300px"></img>
        </div>
    )
}

export default MyImages;