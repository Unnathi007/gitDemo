console.log('before');

const t=getUser(1)
t.then(user => console.log('User',user))
console.log('after');

function getUser(id){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('reading the info from the data base....');
            resolve( {id: id, gitHubUserName: 'teja'});
        }, 2000)
    })
    
}
