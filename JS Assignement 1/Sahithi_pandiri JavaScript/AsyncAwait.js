console.log("before")
 function displayCommits(){
    const user= getUser(1)
    console.log(user)
    const repos=  getRepos(user.gitHubUserName)
    const commits= getCommits(repos[0])
    console.log(commits)
    console.log('after')
}
displayCommits();

function getUser(id) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            console.log('Reading a user from database .....')

            resolve({ id: 1, gitHubUserName: 'sahithi' });

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
