console.log('Before');
const user = getUser(1);
console.log(user);
console.log("After");

function getUser(id){
    setTimeout(()=>{
        console.log("Reading from user database");
        return {id:id, username:'lol'};
    },2000)
    
}