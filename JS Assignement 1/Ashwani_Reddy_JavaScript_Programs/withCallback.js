console.log("Before");
getUser(1,function(user){
    console.log('User',user);
});
console.log('After');

function getUser(id,callback)
{
    setTimeout(() => {
        console.log("Reading a user from database");
        callback({id: id, gitHubUsername: 'mosh'});
    },2000);
}