console.log("before");
const user = getUser(1);
console.log(user)
console.log("after")

 function getUser(id){
    setTimeout(()=>{console.log("reading user from DB");
return {id:id}},2000);
 }