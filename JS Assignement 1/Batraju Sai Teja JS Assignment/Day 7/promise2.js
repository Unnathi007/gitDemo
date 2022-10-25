console.log('before')
getUser(1)
    .then(user => getRepos(user.gitHubUserName))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message))
console.log('after')

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Reading a user from database .....')
            resolve({ id: 1, gitHubUserName: 'samatha' });
        }, 2000)
    })
}

function getRepos(gitHubUserName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching repos of the user .....')
            resolve(['Repo1', 'Repo2', 'Repo3', 'Repo4']);
        }, 2000)
    })
}
function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching the commits of the Repo .....')
            resolve(['commit1', 'commit2', 'commit3', 'commi4']);
        }, 2000)
    })
}


