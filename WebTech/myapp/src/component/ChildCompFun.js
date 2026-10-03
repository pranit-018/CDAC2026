const ChildComp = (props)=>{

   const{newItem,newPrice,parentmethod} = props;

    return <div>
        <h2>This is Child component</h2>
        <div>Samosa:<strong>{newItem}</strong></div>
        <div>Price:<strong>{newPrice}</strong></div>
        <button type="button" onClick={parentmethod}>Change Data</button>
        
    </div>
    
}

export default ChildComp;