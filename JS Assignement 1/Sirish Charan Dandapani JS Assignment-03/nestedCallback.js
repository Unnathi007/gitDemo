console.log('Before')
getUser(1, function(user) {
    console.log('User', user)
    getRepo(user.gitHubUsername, (repos) => {
        console.log('Repos: ', repos)
        getCommit(repos, (repo) => {
            console.log(`${repo} number of commits are ${Math.floor((Math.random() * 100))}`)
        })
    })
});
console.log('After')


function getRepo(user, callback) {
    setTimeout(() => {
        console.log("Fetching repos from user ", user)
        callback(["repo1", "repo2", "repo3"])
    }, 2000);
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading a user from a database....");
        callback({id: id, gitHubUsername: "mosh"})
    }, 2000);
}

function getCommit(repos, callback) {
    setTimeout(() => {
        for(let i = 0; i < repos.length; i++){
            callback(repos[i])
        }
    }, 2000)
}