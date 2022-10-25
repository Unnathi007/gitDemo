const p1=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Asyn operation 1..')

        resolve(1);

    },2000);

});



const p2=new Promise((resolve)=>{

    setTimeout(()=>{

        console.log('Asyn operation 2..')

        resolve(2);

    },1000);

});



Promise.all([p1,p2])