function validatelogin(uname,pwd)
{
    if(uname=="admin" && pwd=="P@ssw0rd")
    {console.log("Login success");
    document.write("Login success");}
    else
    {
    console.log("Login failed");
    document.write("Login failed");
    }
}



function callVL()
{
    let uname=document.getElementById("uname").value;
    let pwd=document.getElementById("pwd").value;
    //alert(`${uname}${pwd}`);
    validatelogin(uname,pwd)
}

//== checks only equality of value
// === checks equality of value and equality of datatype