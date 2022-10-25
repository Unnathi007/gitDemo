// console.log('before');

// getUser(1, (user)=>{

//     console.log('user',user);

//     getRepos(user.gitHubUserName,(repos)=>{

//         console.log('Repos',repos);
//         getcommits(repos[0],(commits)=>{
//             console.log("commits" , commits)
//         })

//     });

// });

// console.log('after');



// function getUser(id, callback){

//     setTimeout(()=>{

//         console.log('reading the info from the data base....');

//         callback( {id: id, gitHubUserName: 'teja'});

//     }, 2000)

// }



// function getRepos(username, callback){

//     setTimeout(()=>{

//         console.log('Calling github API.....');

//         callback(['repo1', 'repo 2', 'repo 3']);

//     }, 2000)

// }
// function getcommits(repo, callback){

//     setTimeout(()=>{

//         console.log('getting commits of the repo....');

//         callback(['commit1', 'commit 2', 'commit 3']);

//     }, 2000)

// }
// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// // function getUser(){
    
// // }
// const address = {
//     street: "hyd",
//     city: "",
//     plannet:"earth",
//     country: '',


// }
// const {street,plannet,f} = address

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         //console.log('Async op 1..');
//         resolve(1);
//     },3000);
// });




// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         //console.log('Async op 2..');
//         resolve(2);
//     },2000);
// });



// Promise.all([p2,p1]).then(result => console.log(result)).catch(err => console.log('Error',err.message))
// const promise1 = Promise.resolve(3);
// const promise2 = Promise.reject(2);
// const promise3 = Promise.resolve(45);
// let p = Promise.all([promise1, promise2, promise3]);
// setTimeout(()=>{
//     console.log(p);
// },1000)

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The first promise has resolved');
        resolve(10);
    }, 1 * 1000);

});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The second promise has rejected');
        reject('Failed');
    }, 2 * 1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('The third promise has resolved');
        resolve(30);
    }, 3 * 1000);
});


Promise.all([p1, p2, p3])
    .then((r)=>{console.log(r)}) // never execute
    .catch((e) =>{console.log(e)});