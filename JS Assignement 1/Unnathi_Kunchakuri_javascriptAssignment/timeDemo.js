// console.log("Before")
// setTimeout(()=>{console.log('Read a user from DB')},2000)
// console.log("after")

console.log("before")

const user= getUser(1)

console.log(user)

console.log("after")

function getUser(){

    setTimeout(()=>{

        console.log("reading a user from database")

        return {id:id,gitname:"josh"}

    },2000)

}