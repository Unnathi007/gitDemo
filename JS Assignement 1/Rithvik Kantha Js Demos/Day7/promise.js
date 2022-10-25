// const p = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         reject(1);
//     },2000);
// });
// p.then( (re)=>{console.log(re)}).catch(err => {console.log("error",err.message)})
// let a = {
//     exec(

// }
let b = RegExp("[0-9]")
if(b.exec("a")){
    console.log("yes")
}
console.log(typeof RegExp("[0-9]"))


let a = [1,3,4]
