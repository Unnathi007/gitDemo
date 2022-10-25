const p = Promise.resolve({id:1})
p.then(result => console.log(result))

const p2 = Promise.reject(new Error('reason for rejection....'))
p2.catch(error => console.log(error))

const p3= Promise.reject('reason for rejection...')
p3.catch(error => console.log(error))