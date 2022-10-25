const p1=new Promise((reject) =>{
    setTimeout(() =>{
        console.log("Async operation 1");
        reject(new Error('Because something failed'));
    },2000);
});

const p2=new Promise((resolve) =>{
    setTimeout(() =>{
        console.log("Async operation 2");
        resolve(1);
    },2000);
});

Promise.race([p2,p1])
.then(result => console.log(result))
.catch(err => console.log(err))


