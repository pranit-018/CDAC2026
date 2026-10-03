const FuncComp = (props)=>{

    const {fname,lname,pin} = props; //destructuring of props;
    return <div>
        <h2>This is function component</h2>
        <p> Name:{fname}  {lname} <br />  Pin:{pin}</p>
    </div>; 
    // return <div>
    //     <h2>This is function component</h2>
    //     <p> Name:{props.fname}  {props.lname} <br />  Pin:{props.pin}</p>
    // </div>;  //it is called as jsx --> it  is stnd for javascript and xml 
}

export default FuncComp;