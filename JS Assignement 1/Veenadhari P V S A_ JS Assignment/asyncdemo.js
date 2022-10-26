// // console.log('before');
// // getUser(1, (user)=>{
// //     console.log('user',user);
// //     getRepos(user.gitHubUserName,(repos)=>{
// //         console.log('Repos',repos);
// //         getCommits(repos, (commits)=>{
// //             console.log('Commits', commits)

// //         })

// //     });

// // });

// // console.log('after');
// function getUser(id, callback){
//      setTimeout(()=>{
//         console.log('reading the info from the data base....');
//         callback( {id: id, gitHubUserName: 'Uday'});
//     }, 2000)
// }

// function getRepos(username, callback){
//      setTimeout(()=>{
//         console.log('Calling github API.....');
//         callback(['repo1', 'repo 2', 'repo 3']);
//     }, 2000)
// }

// function getCommits(repo, callback){
//      setTimeout(()=>{
//         console.log('No of commits for repo1.....');
//         callback(['commit 1', 'commit 2', 'commit3']);
//     }, 2000)
// }

// async function displayCommits(){
//     const user= await getUser(1)
//     const repos=await getRepos(user.githubUserName)
//     const commits=await getCommits([repo[0]])
//     console.log(commits)
// }

function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();