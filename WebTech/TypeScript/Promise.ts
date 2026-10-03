const myFunction = (data:any)=>{
    console.log(`Result is: ${data}`);
}
const myPromis = new Promise((resolve,reject)=>{
    let success:boolean = true;
    if(success){
        resolve("I Complete My Promise");
    }
    else{
        reject("Sorry I was not able to complete promise");
    }
});

myPromis.then((val)=>{
    myFunction(val);
}).catch((error)=>{
     myFunction(error);
})