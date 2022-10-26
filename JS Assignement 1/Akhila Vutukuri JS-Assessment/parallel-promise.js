const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
        
        //reject(new Error('error'));
        resolve(console.log("1st async function"));
        // console.log("1st async function")
    },1000);
})

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        reject(console.log("2nd async function"));
        //console.log("2nd async function")
        //resolve(2);
    },1000);
})

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // reject(1);
        resolve(console.log("3rd async function"));
        //console.log("3rd async function")
    },2000);
})

let p = Promise.race([p1,p2,p3]).catch(error => console.log("error",error));//all promises run parallely....if time taken by p1 is less than p2, output of p2 is displayed 1st irrespective of the order
console.log('tghyuj',p);