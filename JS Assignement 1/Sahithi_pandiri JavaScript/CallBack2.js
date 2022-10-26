console.log("before")
const user=getUser(1)
console.log(user)
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log("after")
console.log(user)
function getUser(id){
    setTimeout(()=> {
        console.log('reading from database');
        return id;
    },2000)
    
}