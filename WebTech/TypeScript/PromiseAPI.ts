
async function getUser() {
    try{
        // const result = await fetch("https://jsonplaceholder.typicode.com/users");
        const result = await fetch("http://localhost:6060/product");
        const users = await result.json();
         console.log(users);
    }
    catch(error){
            console.log(error);
    }
    
}
getUser();