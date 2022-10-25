// console.log("lolol")
// function lol(a,b){
//     c=a+b
   
//     console.log(c)
//     console.log(a)
//     console.log(b)


    
// }
function pass(a,b){
    if(a==="admin" && b ==="Passw0rd123"){
        console.log(Successfull)
        document.write("Login success")
    }
    else{
        console.log(Unsuccessfull)
        document.write("Failed")
    }

}
function call(){
    let a = document.getElementById('username').value
    let b = document.getElementById('password').value
    pass(a,b)
}


