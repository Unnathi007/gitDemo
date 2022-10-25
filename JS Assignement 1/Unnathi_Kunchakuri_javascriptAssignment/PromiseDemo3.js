const p=Promise.resolve({id:1});
p.then(result=>console.log(result));
const p2=Promise.reject('reason for Rejection.....');//(new Error('reason for Rejection.....'));
p.catch(error=>console.log(error.message));
Promise.all([p,p2]);