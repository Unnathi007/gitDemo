console.log('Before');
// getUser(1,function(user){
//     console.log('User', user);

//     getRepositories(user.githubusername,(repos) =>{
//         getCommits(repo,(commits) =>{
//             console.log('Commits', commits);
//         });
//         console.log('Repos',repos)
//     });
// });

getUser(1)
.then(user => {getRepositories(user.githubusername); console.log(user)})
.then(repos => {getCommits(repos[0]); console.log(repos)})
.then(commits => {console.log('Commits',commits)})
.catch(err => console.log('Error',err.message));



// getUser(1)
// .then(user => getRepositories(user.githubusername));
// getUser(1)
// .then(repos => getCommits(repos[0]))
// .then(commits => console.log('Commits', commits))
// .catch(err => console.log('Error',err.message));


console.log('After')


function getUser(id){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('reading a user from database...');
        resolve( {id: id, githubusername :'mosh'});
    }, 2000);
});
}

function getRepositories(username){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('Calling Github API');
        resolve(['repo1','repo2','repo3']);
    },2000);
});
}

function getCommits(repo){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('No of commits for repo1.....');
        resolve(['commit 1', 'commit 2', 'commit3']);
    }, 2000)
});
}