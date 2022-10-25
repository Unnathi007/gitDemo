// console.log("before")

// const p=getUser(1)
// console.log("after")


// function getUser(id){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("reading a user from a database")
//             resolve({id:1,gitusername:"ThugNinja"})
//         },3000)
//     })
// }


// function f(callback){
//     console.log()
//     callback(func1)
// }
// function func(callback2){
//     console.log("callBack");
//     callback2()
// }
// function func1(){
//     console.log("hello")
// }
// f(func)

// console.log(typeof Promise)

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// // const promise3 = new Promise((resolve, reject) => {
// //   setTimeout(resolve, 100, 'foo');
// // });
// let p = Promise.all([promise1, promise2]);
// console.log();

person={
    talk(){
    let self=this;
    setTimeout(()=>{
    console.log("This",self)
    ,2000})
    }
}
    
    person.talk();
    
    let t=person.talk;
    t();