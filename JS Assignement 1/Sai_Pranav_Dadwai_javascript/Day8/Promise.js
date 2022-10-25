const P = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(1);
        reject(new Error('message'));
       
    },2000)
    //resolve(1);

    });
    P
    .then(result=>console.log('Result', result))
    .catch(err=>console.log('Error',err.message));
    