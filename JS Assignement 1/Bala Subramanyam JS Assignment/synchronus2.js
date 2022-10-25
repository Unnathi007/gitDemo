console.log("before")
getUser(1,function(user){
    console.log('user',user);
})
///console.log(user)
console.log('After')

function getUser(id,callback)
{
    setTimeout(() =>{
        console.log("Reading a user from a database...");
        callback({
            id:id,
            github:'Balu'
        })
    },2000);
}