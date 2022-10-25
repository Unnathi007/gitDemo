const p=Promise.resolve({id:1})

p.then(result=> console.log(result))



const p2=Promise.reject(new Error('err message!'))

p2.catch(e=>console.log(e.message))

