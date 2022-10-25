console.log('Before');
getUser(1,function(user){
    console.log('User',user)
})
//const user = getUser(1);
//console.log(user);
console.log("After");

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading from user database");
        callback( {id:id, username:'lol'});
    },2000)
    
}