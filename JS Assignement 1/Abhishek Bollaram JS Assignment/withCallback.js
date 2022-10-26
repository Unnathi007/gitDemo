console.log('before')
getUser(1, display)

console.log('after')

function getUser(id, callback){
    setTimeout(() => {
        console.log('reading the user data from a database')
        callback ( {'id' : id , 'name' : 'GoT'})
    }, 2000)
}

function display(user){
    console.log('user', user)
}