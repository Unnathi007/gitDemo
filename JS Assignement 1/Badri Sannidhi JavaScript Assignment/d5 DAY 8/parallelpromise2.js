const p1 = new Promise((reject)=>{
    setTimeout(() => {
        //console.log('Async op 1..');
        reject(new Error("because something failed"));
    },2000);
});


const p2 = new Promise((resolve)=>{
    setTimeout(() => {
        //console.log('Async op 2..');
        resolve(2);
    },2000);
});

Promise.all([p2,p1])
    .then(result => console.log(result))
    .catch(err => console.log('Error',err.message))