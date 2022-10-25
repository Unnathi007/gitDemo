
let validateUser = (user,pwd) =>
{
    if(user === 'Admin' && pwd === 'P@ssword')
    {
    console.log('Login Success')
    document.write("Login Successful")
    alert()
    }
    else{
    console.log('Login Unsuccessful')
    document.write("Login Unuccessful")
    }
}
let callValid  = () => 
{
     let user=document.getElementById("name").value
     let pwd=document.getElementsByName("password").value
     validateUser(user,pwd)
}
