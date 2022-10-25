console.log("Before");
const user = getUser(1,function(user){
    console.log(user);
});
console.log(user);
console.log("After");

function getUser(id,callback){
    setTimeout(() => {
        console.log("Reading a user data");
        callback("data is fetched");
    },2000);
}