/*
// on success
const p=new Promise((resolve, reject) =>{

    //kick off some async work

    //...
    setTimeout(() => {
        resolve(1);
    }, 2000)

    //reject(new Error('message))

})


// the value present in resolve (1 in this case) is the result written below
p.then(result => console.log('Result',result))
*/

// on failure

const p=new Promise((resolve, reject) =>{

    //kick off some async work

    //...
    setTimeout(() => {
        //resolve(1);
        reject(new Error('some error'))
    }, 2000)

    //reject(new Error('message))

})


// the value present in resolve (1 in this case) is the result written below
p
.then(result => console.log('Result',result))
.catch(err => console.log('error :', err.message))


/*
const p=new Promise((resolve, reject) =>{

    setTimeout(() =>{

        //resolve(1)

        reject(new Error('REJECTED'))

    },2000)

})
p
.then(result => console.log('Result',result))

.catch(err => console.log('Error',err.message))//message is taken from line no 29, here it is REJECTED
*/