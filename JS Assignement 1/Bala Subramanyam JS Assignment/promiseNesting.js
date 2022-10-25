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

const p = getUser(1)
p.then(user => {console.log(user);getRepositories(user.githubUserName)})
.then(repositories => {console.log(repositories); getCommits(repositories[0])})
.then(commits => {console.log(commits)})


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
        resolve(['repo1','repo2','repo2'])
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