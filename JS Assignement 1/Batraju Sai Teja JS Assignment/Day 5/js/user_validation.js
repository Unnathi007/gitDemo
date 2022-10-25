function UserValidation(username, password) {
    if (username === "batrajusaiteja24@gmail.com" && password === "Password@123") {
        document.write("Validated");
    }
    else {
        document.write("Not a validated user");
    }
}

function fetchDetails() {
    let username=document.getElementById("usr").value;
    let password=document.getElementById("pwd").value;
    UserValidation(username,password);
}

