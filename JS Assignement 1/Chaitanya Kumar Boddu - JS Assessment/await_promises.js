console.log('Before')

async function display() {

    const user = await getUser(1)

    const repos = await getRepo(user.gitName)

    const commits = await getCommit(repos)

    console.log(commits)

}


function getUser(id) {
    return new Promise((resolve, reject) =>{
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
            if(num <= 90){
                console.log('Reading a user from a database...');
                resolve( {id: id, gitHubUsername: 'mosh'} )
            }
            else 
                reject(new Error('message1'))
        }, 2000);
    })  
}

function getRepo(user) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
            if(num <= 50){
                console.log("Fetching repos from user ", user.gitHubUsername)
                resolve(["repo1", "repo2", "repo3"])
            }
            else 
                reject(new Error('message2'))
        }, 2000);
    })
}

function getCommit(repos) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 100)
        setTimeout(() => {
            if(num <= 50){
                for(let i = 0; i < repos.length; i++){
                    console.log(`${repos[i]} number of commits are ${Math.floor((Math.random() * 100))}`)
                }
                resolve(1)
            }
            else 
                reject(new Error('message'))
        }, 2000)
        
    })
}

const k = new Promise((resolve, reject) => resolve("Yaaay"))
k.then((val) => console.log(val))