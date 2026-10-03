

function getData():Promise<string>{
    return new Promise((resovle,reject)=>{
        setTimeout(() => {
            resovle("Data Receive")
        }, 2000);
    })
};

// getData().then((val)=>{
//     console.log(val)
// }).catch((error)=>{

// })

async function displyData() {
    try{
        let result = await getData();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
    
}

displyData();

