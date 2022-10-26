console.log("before")
getUser(1,(user)=>{
    
    getRepos(user.gitHubUsername ,(repos)=>{
        console.log("Repos", repos)
    })
})
console.log("after")

function getUser(id,callback){
    setTimeout(()=>{
        console.log('Reading from database')
        callback({id:id , gitHubUsername:'mosh'})
    },2000)
}

function getRepos(username,callback){
    setTimeout(()=>{
        console.log('calling Github api')
        callback(['repo1','repo2','repo3'])
    },2000)
}