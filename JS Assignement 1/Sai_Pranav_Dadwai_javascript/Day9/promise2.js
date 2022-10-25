const p = promise.resolve({id:1})
P.then(result=>console.log(result))

const p2 = promise.reject(new Error('Reason for rejection...'))
p2.catch(error=>console.log(error))

