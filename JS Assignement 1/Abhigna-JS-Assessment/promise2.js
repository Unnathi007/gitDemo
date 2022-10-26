const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        try{
            resolve(1);
        }
        catch{
            reject(new Error('err!'));
        }

    },2000)
})

p.then((result) => console.log('Result',result))
    .catch((e)=>console.log('err : ',e));