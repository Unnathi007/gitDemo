console.log('Before')
// let p = getUser(1);
// p.then((user => {console.log(user); return getRepo(user)}))
//     .then(repos => {console.log(repos); return getCommit(repos)})
//     .then(result => console.log("Result", result)).catch(err => console.log('Error', err.message));
async function displayCommits(){
    const user= await getUser(1)
    const repos=await getRepo(user.gitHubUsername)
    const commits=await getCommit(repos[0])
    console.log(commits)
}
displayCommits();
console.log('After')

function getUser(id) {
    return new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
            
                console.log('Reading a user from a database...');
                resolve( {id: id, gitHubUsername: 'mosh'} )
            
            // else {
            //     reject(new Error('message1'))
            // }
        }, 2000);
    })  
}

function getRepo(user) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
            
                console.log("Fetching repos from user ", user.gitHubUsername)
                resolve(["repo1", "repo2", "repo3"])
            
            // else 
            //     reject(new Error('message2'))
        }, 2000);
    })
}

function getCommit(repos) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
           
                for(let i = 0; i < repos.length; i++){
                    console.log(`${repos[i]} number of commits are ${Math.floor((Math.random() * 100))}`)
                
                resolve(1)
            }
            // else 
            //     reject(new Error('message'))
        }, 2000)
        
    })
}

const k = new Promise((resolve, reject) => resolve("Yaaay"))
k.then((val) => console.log(val))