console.log('Before');




// getUser(1).then(user=>{console.log("user",user);return getRepositories("myname")})

// .then(repos=>{console.log("repos",repos);return getCommits("repo1")})

// .then(commit=>{console.log("commits",commit)});



async function displayCommits(){
 try{
    const user=await getUser(1);

    const repos=await getRepositories(user.gitHubUsername);

    const commits=await getCommits(repos[0]);
    console.log(user)
    console.log(repos)
    console.log(commits);
    }
    catch(err){
        console.log('Error',err)
    }
}

displayCommits();

console.log('After');
function getUser(id){

    return new Promise((resolve,reject)=>{

    setTimeout(()=>{



        console.log('Reading a user from a database');


        reject("User reject");
        // resolve({id: id, gitHubUsername: 'mosh'});

       

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