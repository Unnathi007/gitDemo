/*
  ********  Without Callback *****************
*/
// console.log('Before')
// const user = getUser(1);
// console.log(user)
// console.log('After')

// function getUser(id) {
//     setTimeout(() => {
//         console.log('Reading a user from a database...');
//         return {id: id, gitHubUsername: 'mosh'}
//     }, 2000);
// }

/*
 ************ With Callback ***************
*/
console.log('Before')
getUser(1, function(user) {
    console.log('User', user)
});
console.log('After')

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from a database...');
        callback( {id: id, gitHubUsername: 'mosh'} )
    }, 2000);
}