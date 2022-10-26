

let validate = (user, pwd) => {
    if(user === "administrator" && pwd === "admin"){
        console.log('login successful');
        document.write("Login Success");
    }
    else{
        console.log('login Failed!');
        document.write("Login Failed!");
    }
}

// validate("administrator","admi");

let callValidate = () => {
    let userName = document.getElementById('userName').value;
    let pwd = document.getElementById('pwd').value;

    validate(userName, pwd);
}