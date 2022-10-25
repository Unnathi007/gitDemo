console.log('Before');

getUser(1,(user)=>{

    console.log('User', user);

    getRepositories(user.gitHubUsername,(repos)=>{

        console.log('Repos',repos);
          
        getCommits(repos, (commits)=>{

            console.log('Commits', commits);

        })
        

    });

});

console.log('After');



function getUser(id, callback){

    setTimeout(()=>{

        console.log('Reading a user from a database');

        callback({id: id, gitHubUsername: 'mosh'});

    },2000);

}



function getRepositories(username, callback){

    setTimeout(()=>{

        console.log('Calling GitHub API...');

        callback(['repo1', 'repo2', 'repo3']);

    });

}

function getCommits(repo, callback){

    setTimeout(()=>{

        console.log('Getting commit Details...');

        callback(['c1', 'c2', 'c3']);

    });

}
