console.log("before")
getUser(1,(user) =>{
    console.log(user);
    getRepositories(user.githubUserName,(repos) =>{
        console.log('repos',repos);
        repos.forEach(repo => {
            getCommits(repo,(commits) =>{
                console.log("number of commits for ",repo," are ",commits);
            })
        });
        
    })
})
///console.log(user)
console.log('After')

function getUser(id,callback)
{
    setTimeout(() =>{
        console.log("Reading a user from a database...");
        callback({
            id:id,
            githubUserName:'Balu'
        })
    },2000);
}

function getRepositories(username,callback)
{
    setTimeout(() =>{
        console.log("Calling Github API...");
        callback(['repo1','repo2','repo2'])
    },2000);
}

function getCommits(repo,callback)
{
    setTimeout(() =>{
        console.log("Calling commits API....");
        callback(10);
    },2000);
}