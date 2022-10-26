console.log('Before')
getUser(1,(user)=> {
    console.log(user)
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log("repos",repos)
    })
})
console.log("after")
function getUser(id, callback){
    setTimeout(()=>{
        console.log('reading a user from database');
        callback({id:id,gitHubUsername:'mosh'})
    },2000)
}
function getRepositories(username,callback){
    setTimeout(()=> {
        console.log('calling githup api')
        callback(['one','two'])
    },2000)
}