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



const x = Promise.all([p2,p1])

setTimeout(console.log(x),3000)