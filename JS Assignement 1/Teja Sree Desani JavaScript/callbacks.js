console.log('before');

getUser(1, function(user){
    console.log('User',user);
});
console.log('after');

function getUser(id, callback){
    setTimeout(()=>{
        console.log('reading the info from the data base....');
        callback( {id: id, gitHubUserName: 'teja'});
    }, 2000)
}