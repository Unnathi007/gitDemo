const p=Promise.resolve({id : 1});
p.then(result => console.log(result))

const p2=Promise.reject(new Error('Error Object'));
p2.catch(error => console.log(error))

const p3=Promise.reject('Error Message');
p3.catch(error => console.log(error))