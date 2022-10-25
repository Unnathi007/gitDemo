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

// getUser(1)
// .then(user => {console.log('User',user); getRepositories(user.githubusername)})
// .then(repos => {console.log('Repos',repos); getCommits(repos[0])})
// .then(commits => {console.log('Commits',commits)})
// .catch(err => console.log('Error',err.message));

async function displayCommits()
{
    try{
    const user = await getUser(1)
    console.log(user)
    const repos = await getRepositories(user.githubusername)
    console.log(repos)
    const commits = await getCommits(repos[0])
    console.log(commits)
    }
    catch (err){
        console.log('Error',err)
    }
}

displayCommits();
console.log('After')


function getUser(id){
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log('reading a user from database...');
        //resolve( {id: id, githubusername :'mosh'});
        reject (new Error ('Error has occured'))
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