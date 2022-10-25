let validation = (uname, pass) => {
    if (uname == "admin" && pass == "P@ssword123"){
        console.log("Valid User")
        document.write("Login Sucessfull")
    } else {
        console.log("Invalid User")
        document.write("Login Unsucessfull")
    }
}

let callValidation = () => {
    let uname = document.getElementById("uname").value
    let pass = document.getElementById("pass").value
    validation(uname, pass)
}

function diffBetweenEquals(a, b) {
    if(a === b){
        console.log("Using ===, they are eqaul")
    } else {
        console.log("using ===, they are not equal")
    }

    if (a == b) {
        console.log("using ==, they are equal")
    } else {
        console.log("using ==, they are not equal")
    }
}