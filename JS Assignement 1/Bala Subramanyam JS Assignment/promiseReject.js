const p = new Promise((resolve,reject) => {
    setTimeout(() =>{
     reject(new Error("Timout"));
    },2000)
     // resolve(1);
 })
 
 p.then(result =>console.log('Result',result))
 .catch(err => {
    console.log("err ",err)
    console.log(typeof(err))
 })
 //p.catch(reject => console.log(reject)