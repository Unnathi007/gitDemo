const p = Promise.resolve({id:1})
p.then(res => console.log(res));

const p2 = Promise.reject(new Error('Error'))
p2.catch(res => console.log(res.message));