console.log("before")
getUser(1, (user) => {
    console.log('user',user)
    getRepos( user.githubUsername, (repos) => {
        console.log('repos',repos)
        getCommits(repos[2], (commits) =>{
            console.log(`total commits in ${repos[2]} is ${commits[2]}`)
        })
    })
})

console.log("after")

function getUser(id,callback){
    setTimeout(()=>{console.log("read user from DB"); callback({id:id,githubUsername:"myGithubUname"})},2000);
}


function getRepos(username,callback){
    setTimeout(()=>{console.log("calling github api"); callback(['repo1','repo2','repo3'])},2000);
}

function getCommits(repoName,callback){
    setTimeout(()=>{console.log("total commits"); callback([5,10,15])},2000);
}