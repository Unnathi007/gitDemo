// const p1 = Promise.resolve({id:1})
// p1.then(res => console.log(res));

// const p2 = Promise.reject(new Error('Error'))
// p2.catch(res => console.log(res.message));

// Promise.all([p1,p2])

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