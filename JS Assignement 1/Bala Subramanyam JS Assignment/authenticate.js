let authenticate = (userName,pass) =>
{
    if(userName == ("administrator") && pass == "Passw0rd@123"){
        document.write("Successfull");
        console.log("Successfull");
    }
    else
    {
        document.write("unSuccessfull");
        console.log("Unsuccessfull");
    }

}

