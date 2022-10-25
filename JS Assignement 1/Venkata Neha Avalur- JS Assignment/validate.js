let validateuser = (username, password) => {
    if (username === 'Administrator' && password==='Passw0rd')
    {
        //console.log('login successful')
        //document.write('login successful')
        alert('login successfull')
    }
    else
    {
        //console.log('login failed')
        //document.write('login failed')
        alert('login failed')
    }
}

let callValidateUser = () =>{
    alert('login')
    let username= document.getElementById('username').value 
    let password= document.getElementById('password').value
    alert('password')

    validateuser(username,password)

}

let Add = () =>{
    let x= parseInt(document.getElementById('one').value)
    let y= parseInt(document.getElementById('two').value)
    let sum= x+y
    // console.log(x)
    document.getElementById('answer').innerHTML=x+y
}

