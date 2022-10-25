console.log('before');
const user = getUser(1);
console.log(user);
console.log('after');

function getUser(id){
    setTimeout(()=>{
        console.log('reading the info from the data base....');
        return {id: id, gitHubUserName: 'teja'};
    }, 2000)
}