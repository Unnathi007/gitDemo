const p1=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Async operation1..');

        resolve(1)

    },2000);

})



const p2=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Async operation2..');

        resolve(2)

    },2000);

})



Promise.all([p2,p1])

.then(result=>console.log(result));
