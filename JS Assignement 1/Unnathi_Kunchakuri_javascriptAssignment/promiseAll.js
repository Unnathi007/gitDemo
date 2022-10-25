const p1=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Asyn operation 1..')

        resolve("dfghj");

    },2000);

});



const p2=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Asyn operation 2..')

        resolve("hij");

    },3000);

});



Promise.all([p2,p1])

.then(result => console.log(result))

//.catch(err=>console.log('Error',err.message))