console.log('before')
let user = getUser(1)
console.log(user)
console.log('after')

function getUser(id){
    setTimeout(() => {
        console.log('reading the user data from a database')
        return {'id' : id , 'name' : 'GoT'}
    }, 2000)
}