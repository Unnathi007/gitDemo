console.log('Before');

// getUser(1,(user)=>{

//     console.log('User', user);

//     getRepositories(user.gitHubUsername,(repos)=>{

//         console.log('Repos',repos);
          
//         getCommits(repos, (commits)=>{

//             console.log('Commits', commits);

//         })
        

//     });

// });
getUser(1).then(user=>{console.log("user",user);return getRepositories("myname")})
.then(repos=>{console.log("repos",repos);return getCommits("repo1")})
.then(commit=>{console.log("commits",commit)});

console.log('After');



function getUser(id){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        console.log('Reading a user from a database');

        resolve({id: id, gitHubUsername: 'mosh'});
        
    },2000);
});
}



function getRepositories(username){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        console.log('Calling GitHub API...');

        resolve(['repo1', 'repo2', 'repo3']);

    });
});

}

function getCommits(repo, callback){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{

        console.log('Getting commit Details...');

        resolve(['c1', 'c2', 'c3']);

    });
});

}
