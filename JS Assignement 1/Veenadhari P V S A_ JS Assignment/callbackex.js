// console.log("before")
// const user = getUser(1)
// console.log(user)
// console.log("after")

// function getUser(id) {
//     setTimeout(()=>{
//         console.log('Reading from database')
//         return{id:id , gitHubUsername:'mosh'}
//     },2000)
// }

console.log("before")
const user = getUser(1,function(user){
    console.log(user)
})
console.log("after")

function getUser(id,callback) {
    setTimeout(()=>{
        console.log('Reading from database')
        callback({id:id , gitHubUsername:'mosh'})
    },2000)
}