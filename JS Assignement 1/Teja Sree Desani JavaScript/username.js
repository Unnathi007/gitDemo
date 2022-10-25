function validation(username, password){
    if(username==='admin' && password==="teja"){
        console.log('Logged in Successfully')
        document.write("Logged in Successfully")
    }
    else{
        console.log('Invalid Credentials')
        document.write('Invalid Credentials')
    }
}

function callvalidation(){

    let uname = document.getElementById('kite').value
    let pwd= document.getElementById('pwd').value

    validation(uname, pwd)
}