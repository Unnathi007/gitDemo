console.log('before')
getUser(1, (user) => {
    console.log('user', user)
    getRepositories(user.gitHubUsername, (repos) => {
        console.log('repos', repos)
    })
})

console.log('after')

function getUser(id, callback){
    setTimeout(() => {
        console.log('reading the user data from a database')
        callback ( {id : id , gitHubUsername : 'GoT'})
    }, 2000)
}

function getRepositories(username, callback){
    setTimeout(() => {
        console.log('calling github API')
        callback (['repo1', 'repo2', 'repo3'])
    }, 2000)
}


/*
console.log('before');



getUser(1, (user)=>{

    console.log('user',user);

    getRepos(user.gitHubUserName,(repos)=>{

        console.log('Repos',repos);

        getCommits(repos, (commits)=>{

            console.log('Commits', commits);

        })

    });

});

console.log('after');



function getUser(id, callback){

    setTimeout(()=>{

        console.log('reading the info from the data base....');

        callback( {id: id, gitHubUserName: 'teja'});

    }, 2000)

}



function getRepos(username, callback){

    setTimeout(()=>{

        console.log('Calling github API.....');

        callback(['repo1', 'repo 2', 'repo 3']);

    }, 2000)

}



function getCommits(repo, callback){

    setTimeout(()=>{

        console.log('No of commits for repo1.....');

        callback(['commit 1', 'commit 2', 'commit3']);

    }, 2000)

}*/