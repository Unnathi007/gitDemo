console.log('before');

getUser(1)
    .then(user => {getRepos(user.gitHubUserName);console.log(user);})
    .then(repos => getCommits(repos[0]))
    .then(commits=> console.log('Commits', commits))
    .catch(err => console.log('Error Message',err.message))

console.log('after');

// getUser(1, (user)=>{
//     console.log('user',user);
//     getRepos(user.gitHubUserName,(repos)=>{
//         console.log('Repos',repos);
//         getCommits(repos, (commits)=>{
//             console.log('Commits', commits);
//         })
//     });
// });

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('reading the info from the data base....');
            resolve( {id: id, gitHubUserName: 'teja'});
        }, 2000)
    })
}

function getRepos(username){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Calling github API.....');
            resolve(['repo1', 'repo 2', 'repo 3']);
        }, 2000)
    })
}

function getCommits(repo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('No of commits for repo1.....');
            resolve(['commit 1', 'commit 2', 'commit3']);
        }, 2000)
    })
}