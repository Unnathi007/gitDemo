function validateUsernameAndPassword(username, password){
    document.write(username)
    if(username == 'admin' && password == 'Abc123!'){
        console.log('LOGIN SUCCESSFUL!')
        document.write('LOGIN SUCCESSFUL')
    }
    else{
        console.log('INCORRECT USERNAME OR PASSWORD!')
        document.write('INCORRECT USERNAME OR PASSWORD')
    }
}

function callValidateUser(){
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value
    validateUsernameAndPassword(username, password)
}

//validateUsernameAndPassword('admin', 'Abc123!')