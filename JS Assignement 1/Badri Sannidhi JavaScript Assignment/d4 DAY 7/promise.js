const p = new Promise((resolve,reject) =>
    {
    
    //kick of some asynch work
    //….
    setTimeout(()=>
    {
    //On Success
    //resolve(1);
    //},2000);

    //ON failure
    reject(new Error('Promise Reject'));
    },2000);

    });
    
    
    p.then(result => console.log('Result',result));
    p.catch(err => console.log('Error',err.message));
    
    