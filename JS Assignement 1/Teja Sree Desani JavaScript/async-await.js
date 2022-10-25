console.log('before');

// getUser(1)
//     .then(user => getRepos(user.gitHubUserName))
//     .then(repos => getCommits(repos[0]))
//     .then(commits=> console.log('Commits', commits))
//     .catch(err => console.log('Error Message',err.message))


async function displayCommits(){
    try{
        const user = await getUser(1)
        console.log(user);
        const repos = await getRepos(user.gitHubUserName)
        const commit = await getCommits(getRepos[0])
        console.log(commit);
    }
    catch(err){
        console.log(err.message);
    }
}

displayCommits()
console.log('after');


function getUser(id){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            console.log('reading the info from the data base....');
            //resolve( {id: id, gitHubUserName: 'teja'});
            rejected(new Error('got error!'))
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