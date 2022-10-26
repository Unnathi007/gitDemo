console.log("before");
getUser(1,userDetails);
function userDetails(user){
  console.log(user)
}
console.log("after")

 function getUser(id,callback){
    setTimeout(()=>{console.log("reading user from DB");
callback({id:id})},2000);
 }