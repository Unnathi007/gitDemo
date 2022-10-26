const p1=new Promise((resolve)=>{
    setTimeout(()=>{
        console.log('Asyn operation 1..')
        resolve(1);
    },2000);
});

const p2=new Promise((resolve,err)=>{
    setTimeout(()=>{
        console.log('Asyn operation 2..')
        err("err");
    },1000);

});

Promise.all([p1,p2])

// Promise.race([p1,p2])

