// console.log("lolol")
// function lol(a,b){
//     c=a+b
   
//     console.log(c)
//     console.log(a)
//     console.log(b)


    
// }
let pass=(a,b)=>{
    if(a==="admin" && b ==="Passw0rd123"){
        console.log("succes")
        document.write("Login success")
    }
    else{
        console.log("fail")
        document.write("Failed")
    }

}

function add(a,b){
    document.write(a+b)
}
function call(){
    let a = document.getElementById('userName').value
    let b = document.getElementById('password').value
    sum(a,b)
}
function sum(a,b){
    console.log(a+b)
    document.write(a+b)
}
function call2(){
    let a = parseFloat(document.getElementById('num1').value)
    let b = parseFloat(document.getElementById('num2').value)

    add(a,b)
}
let age =23
age="lolol"
console.log(typeof(age))
let lol = true
lol =parseInt(lol)
console.log(lol)
console.log(typeof(lol))

