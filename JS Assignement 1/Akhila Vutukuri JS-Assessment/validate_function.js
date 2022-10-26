function validate_user(username,password){
    if(username ==="Admin" && password ==="Passw0rd@123" ){
        console.log("User validation successful");
        document.write("Login Successful");
    }
    else{
        console.log("User validation unsuccessful");
        document.write("Login unsuccessful");
    }
}

//validate_user("Admin","Passw0rd@123");
//validate_user("admin","Passw0rd@123");

// "==" - checks value equality    "===" - checks both value and data equality


function getValues(){
    let username=document.getElementById("email").value;
    let password=document.getElementById("pwd").value;
    validate_user(username,password);

}



