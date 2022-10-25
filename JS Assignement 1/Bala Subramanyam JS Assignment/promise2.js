const p = new Promise((resolve,reject) => {
   setTimeout(() =>{
    resolve(1);
   },2000)
    // resolve(1);
})

p.then(result =>console.log('Result',result));
//p.catch(reject => console.log(reject)