const MyDetails = (props)=>{

    const {name,contact,gender,address} = props; //destructuring of props;
    return <div>
        <h2>My Details </h2>
        <p > Name:{name} <br />Contact:{contact} <br />  Gender:{gender} <br />  Address:{address}</p>
    </div>; 
    
}

export default MyDetails;