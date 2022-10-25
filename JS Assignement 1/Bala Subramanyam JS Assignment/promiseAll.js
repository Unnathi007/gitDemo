const p1 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log('Async operation 1...');
        resolve(1);

    },4000)
});
const p2 = new Promise((resolve,reject) => {
    setTimeout(() =>{
        console.log('Async operation 2...');
        reject("error")

    },4000)
});

Promise.all([p1,p2])
.then(result => console.log(result))
.catch(err => console.log(err))