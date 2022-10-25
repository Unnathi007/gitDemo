console.log("Before");
getUser(1,(user) =>{
    console.log('user',user);
    getRepositories(user.gitHubUsername,(repos) => {
      console.log('Repos',repos)
      getCommits(repos[1],(commits) =>{
        console.log("number of commits are ",commits);
    });
    });    
});
console.log('After');

function getUser(id,callback)
{
    setTimeout(() => {
        console.log("Reading a user from database");
        callback({id: id, gitHubUsername: 'mosh'});
    },2000);
}

function getRepositories(username, callback)
{
    setTimeout(() => {
        console.log("calling GitHub API");
        callback(['repo1','repo2','repo3']);
    },2000);
}

function getCommits(repo,callback)
{
    setTimeout(() =>{
        console.log("Calling commits API....");
        callback(10);
    },2000);
}