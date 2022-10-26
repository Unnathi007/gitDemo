console.log('before')

async function displayCommits(){
    try {
    const user = await getUser(1)
    console.log(user)
    const repos = await getRepos(user.gitHubUsername)
    console.log(repos)
    const commits = await getCommits(repos[0])
    console.log(commits)
    }
    catch(error){
        console.log('error : ', error)
    }
}

displayCommits()
console.log('after')

function getUser(id){
    return new Promise((resolve1, reject) => {
        setTimeout(() => {
            console.log('reading from a database')
            resolve({id : id, githubUsername : 'got'})
            reject('ERROR getting user details')
        }, 2000)
    })
}

function getRepos(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching repos of the user')
            resolve(['repo1', 'repo2', 'repo3'])
            reject('ERROR getting repos')
        }, 2000)
    } )
}

function getCommits(repo){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetching the commits of the repo')
            resolve(['commit1', 'commit2', 'commit3'])
            reject('ERROR getting commits')
        }, 2000)
    })
}