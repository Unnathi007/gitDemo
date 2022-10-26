console.log("before");
getUser(1,(user)=>{
    console.log('user : ',user)
    getRepositories(user.gitHubUsername,(repos)=>{
        console.log('Repos',repos);
        getCommits(repos,(commits)=>{
            console.log("commits: ",commits);
        })
    })
})

console.log("after");

function getUser(id,callback){
    setTimeout(()=>{
        console.log("reading a user from database");
        callback({id:id,gitHubUsername:'Mos'});
    },2000)
}

function getRepositories(username,callback){
    setTimeout(()=>{
        console.log("calling Github Api");
        callback(['repo1','repo2','repo3'])
    })
}

function getCommits(repos,callback){
    setTimeout(()=>{
        console.log("the number of commits are ");
        callback(['commit1','commit2','commit3']);
    })
}