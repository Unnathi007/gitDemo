console.log('Before');
getUser(1,function(user){
    console.log('User', user);

    getRepositories(user.githubusername,(repos) =>{
        getCommits(repo,(commits) =>{
            console.log('Commits', commits);
        });
        console.log('Repos',repos)
    });
});
console.log('After')

function getUser(id,callback){
    setTimeout(() => {
        console.log('reading a user from database...');
        callback( {id: id, githubusername :'mosh'});
    }, 2000);
}

function getRepositories(username,callback){
    setTimeout(() => {
        console.log('Calling Github API');
        return ['repo1','repo2','repo3'];
    },2000);
}

function getCommits(repo, callback){
    setTimeout(()=>{
        console.log('No of commits for repo1.....');
        callback(['commit 1', 'commit 2', 'commit3']);
    }, 2000)
}