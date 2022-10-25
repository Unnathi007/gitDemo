console.log("Before");
getUser(1,(user)=> 
{
    console.log("User",user);
    getRepos(user.gitUName,(repos)=>
    {
        console.log('Repos',repos);
        getCommits(repos, (commits) =>
        {
            console.log("Commits",commits);
        });
    });
});

console.log("After");

function getUser(id,callback)
{
    setTimeout( () =>
    {
        console.log("Reading a user from a database....");
        callback({id:id, gitUName : "mash"});
       

    },2000 ); 

}

function getRepos(id,callback)
{
    setTimeout( () =>
    {
        console.log("Calling GitHUb API...");
        callback(['r1','r2','r3']);
       

    },2000 ); 

}

function getCommits(id,callback)
{
    setTimeout( () =>
    {
        console.log("List of commits in repos");
        callback(['213','224','275']);
       

    },2000 ); 

}