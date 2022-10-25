function validateUser(username, password)
{
    if(username==="karthik" && password==="P@ssword123")
    {
        console.log('login successful');
        document.write("login successful");
    }
    else
    {
        console.log('login failed');
        document.write("login failed");
    }
}
//validateUser('Administrator','P@ssword123')
callvalidateUser = () =>
{
    let username=document.getElementById('username').value
    let password=document.getElementById('password').value
    validateUser(username, password)
}

/*

nam=9
mak="kjbadhs"
mk=89.5
let a='kjsadh'
let mk1=56
mk1=jh

*/