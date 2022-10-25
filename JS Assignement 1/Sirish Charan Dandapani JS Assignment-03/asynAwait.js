console.log("before")
display()
console.log("after")

async function display() {
    try{ 
        const user = await getUser(1)
        const repos = await getRepo(user.gitname)
        const commits = await getCommit(repos)
        console.log(commits)
    } catch (err) {
        console.log("Message: ", err)
    }
}

function getUser(id) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
                console.log('Reading a user from a database...');
                reject(new Error("This is my indused err"))
                resolve( {id: id, gitname: 'mosh'} )
        }, 2000);
    })  
}

function getRepo(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                console.log("Fetching repos from user ", user)
                resolve(["repo1", "repo2", "repo3"])
        }, 2000);
    })
}

function getCommit(repos) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            for(let i = 0; i < repos.length; i++){
                console.log(`${repos[i]} number of commits are ${Math.floor((Math.random() * 100))}`)
            }
            resolve("completed")
        }, 2000)
        
    })
}