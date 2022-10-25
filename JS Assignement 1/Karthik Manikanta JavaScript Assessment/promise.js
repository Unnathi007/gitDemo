/*
const p=new Promise((resolve, reject) =>{
    //kick off some async work
    //...
    resolve(1);// 1 is the result in line 8
    //reject(new Error('message))
})

p.then(result => console.log('Result',result))// result is taken from line 4 i.e. 1

// SYNTAX FOR PROMISE

*/


/*
const p=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve(1)
    },2000)
    //resolve(1);
})
p.then(result => console.log('Result',result))
*/


const p=new Promise((resolve, reject) =>{
    setTimeout(() =>{
        //resolve(1)
        reject(new Error('REJECTED'))
    },2000)
})
p
.then(result => console.log('Result',result))
.catch(err => console.log('Error',err.message))//message is taken from line no 29, here it is REJECTED
