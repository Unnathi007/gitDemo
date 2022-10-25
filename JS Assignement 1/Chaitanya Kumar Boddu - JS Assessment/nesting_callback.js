console.log('before');



getUser(1, (user)=>{

    console.log('user',user);

    getRepos(user.gitHubUserName,(repos)=>{

        console.log('Repos',repos);

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