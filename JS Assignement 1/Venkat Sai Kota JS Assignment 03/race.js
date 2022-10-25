// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'one');
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 100, 'two');
//   });
  
//   Promise.race([promise1, promise2]).then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   });
//   // expected output: "two"
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


Promise.race([p1, p2]).then((value) => {
        console.log(value);
        // Both resolve, but promise2 is faster
      });