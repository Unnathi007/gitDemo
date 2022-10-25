const p = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        try{
            resolve(1)
        }
        catch{
            reject(new Error('Message'))
        }
    }, 2000)
    
});

p
.then(result => console.log('Result', result))
.catch(err=> console.log('Error',err.message))