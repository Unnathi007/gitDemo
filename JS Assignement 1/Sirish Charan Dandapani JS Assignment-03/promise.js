const p = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 100)
    setTimeout(() => {
        if(num <= 50)
            resolve(1)
        else 
            reject(new Error('message'))
    }, 2000)    
});

p.then((result) => console.log('Result', result)).catch(err => console.log('Error', err.message))
