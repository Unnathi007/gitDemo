// console.log("before")
// setTimeout(()=>{
//     console.log("reading a user from database...")
// },2000)
// console.log("after")

console.log("before")
const user= getUser(1)
console.log(user)
console.log("after")
function getUser(){
    setTimeout(()=>{
        console.log("reading a user from database")
        return {id:123,gitname:"josh"}
    },2000)
}