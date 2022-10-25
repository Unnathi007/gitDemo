console.log("before")
// getUser(1,(user) =>{
//     console.log(user);
//     getRepositories(user.githubUserName,(repos) =>{
//         console.log('repos',repos);
//         repos.forEach(repo => {
//             getCommits(repo,(commits) =>{
//                 console.log("number of commits for ",repo," are ",commits);
//             })
//         });
        
//     })
// })
///console.log(user)

async function displayCommits()
{
    try{
    const user = await getUser(1);
    console.log()
    const repos = await getRepositories(user.githubUserName);
    const commits = await getCommits(repos[1]);

    console.log(commits);
    }
    catch(err){
    console.log(err);
    }
}


displayCommits()

function getUser(id)
{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            console.log("Reading a user from a database...");
           resolve({
                id:id,
                githubUserName:'Balu'
            })
        },2000);
})   
}
function getRepositories(username)
{
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("Calling Github API...");
        // resolve(['repo1','repo2','repo2'])

        reject("error");
    },2000);
})
}

function getCommits(repo)
{
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        console.log("Calling commits API....");
        resolve(10);
    },2000);
})
}