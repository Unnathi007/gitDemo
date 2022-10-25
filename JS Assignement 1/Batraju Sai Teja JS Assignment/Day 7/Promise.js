/*

const p = new Promise((resolve,reject) => {
    resolve(1);
});


*/

// const p = new Promise((resolve,reject) => {
//    //setTimeout(() => {resolve(1);},2000);
//    setTimeout(() => {reject(new Error('message'));},1000);
// })

// p
// .then(result => console.log('Result',result))
// .catch(err => console.log('error',err.message));

let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('Async op 1..');
        reject(new Error("because something failed"));
    },3000);
});

let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        //console.log('Async op 2..');
        resolve(2);
    },2000);
});

Promise.all([p2,p1])
    .then(result => console.log(result))
    .catch(err => console.log('Error',err.message))