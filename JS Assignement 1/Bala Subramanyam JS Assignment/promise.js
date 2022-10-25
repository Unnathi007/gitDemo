const p = new Promise((resolve,reject) => {
    //reject(5);
    resolve(1);
})

p.then(result =>console.log('Result',result));
//p.catch(reject => console.log(reject))