console.log('Before');
getUser(1,function(user){
    console.log('User',user)
})
console.log('After')

function getUser(id,callback){
    setTimeout(() => {
        console.log('reading a user from database...');
        callback( {id: id, githubusername :'mosh'});
    }, 2000);
}