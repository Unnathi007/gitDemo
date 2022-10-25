console.log("Before")
getUser(1, function(user){
    console.log('User', user)
})
console.log("After")
//callbacks
//promises
//asynchronous/await

function getUser(id, callback){
    setTimeout(() => {
        console.log('Reading a user from the Database...')
        callback({id: id, gitHubUsername: 'mosh'})
    }, 2000)
}
