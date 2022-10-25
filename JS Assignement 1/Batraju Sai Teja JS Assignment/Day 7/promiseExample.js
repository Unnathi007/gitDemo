console.log("Before");
getUser(1)
    .then((user) => {return getRepos(user.gitHubUserName)})
    .then((repos) =>{return getCommits(repos[0])})
    .then(commits => console.log('Commits : ', commits))
    .catch(err => console.log('Error', err.message))
console.log("After");

function getUser(id) {
    console.log("1");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("2");
            console.log("Reading a user");
            resolve({ id: 1, gitHubUserName: 'sai' });
            console.log("3");
            //reject("Error reading users")
        }, 2000);
    })
}

function getRepos(username) {
    console.log("5");
    return new Promise((resolve, reject) => {
        console.log("6");
        console.log("reading repos");
        resolve(['Repo1', 'Repo2', 'Repo3', 'Repo4']);
        console.log("7");
    })
}

function getCommits(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Retrieving commits");
            resolve(['commit1', 'commit2', 'commit3']);
            reject("Error reading commits")
        })
    })
}

