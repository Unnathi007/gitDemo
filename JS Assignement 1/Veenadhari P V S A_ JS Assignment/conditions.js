function check(uname,pass){
    if(uname==='admin' && pass==='admin'){
        console.log('true')
        document.write('login successful')
    }
    else{
        console.log('false')
        document.write('login failed')
    }
}
function callcheck(){
    let username=document.getElementById('uname').value;
    let password=document.getElementById('password').value;
    check(username,password);
}
