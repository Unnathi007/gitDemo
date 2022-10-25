let sname = document.getElementById("first")
let ph = document.getElementById("second")
let age = document.getElementById("third")
let mail = document.getElementById("fourth")

function validation() {
    let snameReg = new RegExp("^[a-zA-Z]")
    let phReg = new RegExp("^[987][0-9]{9}$")
    let ageReg = new RegExp("^[0-9]{1,2}$")
    let mailReg = new RegExp("@gmail.com$")

    if(! snameReg.test(sname.value)) {
        alert("name should be min 6 and max 10 characters and start with alphabet");
        sname.style.backgroundColor = "#FF5E5C";
        return false;
    } else if (! phReg.test(ph.value)) {
        alert("invalid mobile number");
        ph.style.backgroundColor = "#FF5E5C";
        return false;
    } else if (! ageReg.test(age.value)) {
        alert("Invalid age");
        age.style.backgroundColor = "#FF5E5C";
        return false;
    } else if (! mailReg.test(mail.value)) {
        alert("Invalid mail");
        mail.style.backgroundColor = "#FF5E5C";
        return false;
    }
    return true
}

function resetError() {
    document.activeElement.style.backgroundColor = "white"
}