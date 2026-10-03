const GreetingComp = ()=>{
    const greeting =()=>{
        window.alert("Nice to Mett you");
    }

    const welcome =  ()=>{
        window.alert("Welcome you all");
    }
    return <div>
        <h2>This is greeting Component</h2>
        <button type="button" onClick={()=>greeting()}>Greetings</button>
        <h2 onMouseOver={()=>welcome()}>Welcome</h2>
    </div>


}

export default GreetingComp;
