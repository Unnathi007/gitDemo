const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async op 1..');
        resolve("because something failed");
    },2000);
});


const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Async op 2..');
        resolve(2);
    },1000);
});
Promise.race([p1, p2]).then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  });
// Promise.race([p2,p1])
//     .then(result => console.log(result))
//     .catch(err => console.log('Error',err.message))