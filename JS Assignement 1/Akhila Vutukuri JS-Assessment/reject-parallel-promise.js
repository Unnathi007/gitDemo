const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        console.log("1st async function")
        reject(new Error('failed'));
    },2000);
})

const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        console.log("2nd async function")
        resolve(1);
    },2000);
})

Promise.all([p1,p2]);