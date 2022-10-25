let username="admin";
let password="password@123";
function login(username,password){
if(username==="admin"){
    if(password=="password@123"){
        console.log("login successful");
    }
    else{
        comsole.log("invalid password");
    }
}
else{
    console.log("invalid username or password");
}
}
// login(username,password);
  

function validateUser(){
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    if(username==="admin"){
        if(password=="password@123"){
            console.log("login successful");
            document.write("Login Successful");
        }
        else{
            comsole.log("invalid password");
            document.write("Login Fail");
        }
    }
    else{
        console.log("invalid username or password");
        document.write("Login Fail");
    }
}
function addNum(){
    let x=document.getElementById('a').value;
    let y=document.getElementById('b').value;
    console.log(x+y);
    let z=parseInt(x, 10)+parseInt(y, 10);
    document.getElementById('res').innerHTML="Result is : "+z;
}

let a=10;
a='asd';
var b=1;
b='asdfgh';
// const b=3;
console.log(a);
console.log(b);
{
    var x=1;
    let y=3;
    const z=4;
}
// console.log(x);
// console.log(y);
// console.log(z);
function f1(n){
    console.log(n*n);
}
let v1=function f2(n){
    console.log(n*n);
}
let v2=function (n){
    console.log(n*n);
}
let v3=(n)=>{console.log(n*n);};
console.log(v3(2));
console.log(f1(2));
console.log(v1(2));
console.log(v2(2));
// console.log(f2(2));
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
    let fname="void";
    let lname="empty";
    let res=(x,y)=>{return x+y;}
console.log(res(fname,lname));
    