const p1=new Promise((resolve,reject)=>{

    setTimeout(()=>{

        

        reject(new Error("hi"));
        console.log('Asyn operation 1..')

    },2000);

});



const p2=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Asyn operation 2..')

        resolve(2);

    },2000);

});



Promise.all([p1,p2])