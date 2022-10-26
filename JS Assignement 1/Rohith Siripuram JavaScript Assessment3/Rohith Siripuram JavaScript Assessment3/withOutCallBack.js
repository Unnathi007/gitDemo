console.log('Before');
let user = getUser(6)
console.log(user);
console.log('After');

function getUser(id){
    setTimeout(() => {
        console.log('reading user details...');
        return {id:id,mail:'xyz@mail.com'}
    }, 2000);
}