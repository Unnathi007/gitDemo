// const p=new Promise((resolve,reject) =>{
//     //Kick off some async work
//     // …
//     resolve(1);
//     //rejection Error('message'));
// });

// p.then(result => console.log('Result',result));    

const p=new Promise((resolve,reject) =>{
    //Kick off some async work
    // …
    setTimeout(()=>{
        resolve(1);
    },2000);
    //rejection Error('message'));
});

p.then(result => console.log('Result',result));    