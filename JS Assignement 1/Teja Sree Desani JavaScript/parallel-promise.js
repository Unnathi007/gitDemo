// const p1=new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('Async Operation 1....');
//         resolve(1)
//     }, 2000);
// })

// const p2=new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('Async Operation 2....');
//         resolve(2)
//     }, 2000);
// })

// Promise.all([p2,p1])
// .then(result => console.log(result))
// .catch(err=>console.log('Error',err.message))

// const p1=new Promise((reject) =>{
//     setTimeout(() => {
//         console.log('Async Operation 1....');
//         // resolve(1)
//         reject(new Error('because something failed.'))
//     }, 2000);
// })

// const p2=new Promise((resolve) =>{
//     setTimeout(() => {
//         console.log('Async Operation 2....');
//         resolve(2)
//     }, 2000);
// })

// Promise.all([p2,p1])
// .then(result => console.log(result))
// .catch(err=>console.log('Error',err.message))


const p1=new Promise((reject) =>{
    setTimeout(() => {
        console.log('Async Operation 1....');
        // resolve(1)
        reject(new Error('1111    because something failed.'))
    }, 1000);
})

const p2=new Promise((reject) =>{
    setTimeout(() => {
        console.log('Async Operation 2....');
        // reject(2)
        reject(new Error('2222    because something failed.'))
    }, 2000);
})

Promise.all([p2,p1])
.catch(result => console.log(result))
.catch(err=>console.log('Error',err.message))