let logincheck=(name,password)=>{
if(name=="admin" && password=="password"){
    console.log("Login Successful");
    document.write('Login Successful');
}
else{
    console.log("Login Failed");
    document.write('Login Failed');
}
}
let loginpr=()=>{
    let name=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    logincheck(name,password)
}
