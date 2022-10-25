const p = Promise.resolve({ id: 1 });
p.then(result => console.log(result))

const p1 = Promise.reject(new Error("this is a new error"));
p1.catch(result => console.log(result.message))

const p2 = Promise.reject("this is a new error");
p2.catch(result => console.log(result))

