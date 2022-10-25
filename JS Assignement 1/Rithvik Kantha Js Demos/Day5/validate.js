
let validate = (userName,pass) => {
    if(userName === "Admin" && pass === "P@ssw0rd123"){
        console.log("Welcome...! ")
    }
    else{
        console.log("Wrong credentials");
    }
}
validate("Admin", "P@ssw0rd123");
function square(n){
    console.log(`square of ${n} is ${n*n}`);
}
let square1 = function myFunction(n){
    console.log(`square of ${n} is ${n*n}`);
}
let square2 = function(n){
    console.log(`square of ${n} is ${n*n}`);
}
let square3 = (n) =>{
    console.log(`square of ${n} is ${n*n}`);
}
square(4);
square1(4);
square2(4);
square3(4);
