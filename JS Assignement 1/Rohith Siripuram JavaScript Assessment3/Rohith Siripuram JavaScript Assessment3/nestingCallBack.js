console.log('Before');

// getUser(1,(user) => {
//     getRepositories(user.mail, (repos) =>{
//         console.log('Repos', repos);
//         getCommits(repos, (commits)=>{
//             console.log('Commits', commits);
//         })
//     });
// });

getUser(1)
    .then(user => getRepositories(user.mail))
    .then(repos =>getCommits(repos[0]))
    .then(commits =>console.log('Commits',commits))
    .catch(err=> console.log('Error',err.message))

console.log('After');

function getUser(id){
    return new Promise((res,err) => {
        setTimeout(() => {
            console.log('reading user data...');
            res({id:id, mail:'xyz@zyx.com'})
        }, 2000);
    })
}

function getRepositories(username){
    return new Promise((res,err) => {
        setTimeout(() => {
            console.log('Calling api...');
            res(['repo1','repo2','repo3'])
        }, 2000);
    })
    
}

function getCommits(repo){
    return new Promise((res,err) =>{
        setTimeout(()=>{
            console.log('No of commits for repo1.....');
            err(['commit 1', 'commit 2', 'commit3']);
        }, 2000)
    })
    
}