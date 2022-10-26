console.log('Before');

getUser(1, function(user){
    console.log('User', user);
});

console.log('After');

function getUser(id,callback){
    setTimeout(() => {
        console.log('reading user data...');
        callback({id:id, mail:'xyz@zyx.com'})
    }, 2000);
}