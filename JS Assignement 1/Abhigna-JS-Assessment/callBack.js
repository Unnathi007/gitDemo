console.log("before");
const user= getUser(1);
console.log(user);
console.log("after");

function getUser(id){
    setTimeout(()=>{
        console.log("reading a user from a database");
        return {id:id,gitHubUsername:'mos'};
    },1000);
}