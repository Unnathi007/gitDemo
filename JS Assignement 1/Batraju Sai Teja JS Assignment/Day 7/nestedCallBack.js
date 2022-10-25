console.log("before");
getUser(1, (user) => {
    console.log(user);
    getUserRepos(user.gitHubUsername, (repos) => {
        console.log(repos);
        getCommits(repos[0], (commits) => {
            console.log(commits);
        })
    });
});
console.log("After");

function getUser(id, callback) {
    setTimeout(() => {
        console.log("Reading user data");
        callback({ id: id, gitHubUsername: 'sai' });
    }, 2000);
}

function getUserRepos(username, callback) {
    setTimeout(() => {
        console.log("Calling GitHub API");
        callback(['one', 'two']);
    }, 2000);
}

function getCommits(repoName, callback) {
    setTimeout(() => {
        console.log("Retrieveing commits");
        callback("50");
    }, 2000);
}
