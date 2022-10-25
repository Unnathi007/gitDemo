const p1= Promise.resolve({id:1})
p1.then(result => console.log(result))

const p2= Promise.reject(new Error("Error is generated........."))
p2.catch(err => console.log(err.message))


const p3= Promise.reject("Another Error is generated.........")
p3.catch(err => console.log(err))