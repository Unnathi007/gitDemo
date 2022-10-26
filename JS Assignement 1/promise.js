const p =new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log('Reading a user from a database');


        resolve("User resolve");
        // resolve({id: id, gitHubUsername: 'mosh'});

       

    },2000);

})
p.then(result=> console.log(result))

const p1 =new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log('Reading a user from a database');


        reject("User reject");
        // resolve({id: id, gitHubUsername: 'mosh'});

       

    },1000);
})
p1.then(result=> console.log(result))

Promise.all(([p,p1]))