/*x=(user_name, password1) => {
    if (user_name === "admin" && password1 === "password") {
        console.log("you have successfully logged in");
        document.write("successfull");
    }
    else {
        console.log("you are not a valid user");
        document.write("not a valid user");
    }
}
*/
/*y=1;
z='1';
console.log(typeof(y),typeof(z));
console.log(y===z);*/
 /*function validation(){
    let z=document.getElementById('username').value;
    let y=document.getElementById('pass').value;
    x(z,y);
 }*/

 /*function add()
 {
    let z=document.getElementById('num1').value;
    let y=document.getElementById('num2').value;
    let r=parseInt(z)+parseInt(y);
    document.getElementById("res").value= r;
    
 }*/

 /*for(let i=0;i<5;i++){
    console.log(i);
 }
 console.log(i);*/

//  let squaref=function squarefun() {
//     alert("hi");
//     let x = document.getElementById("num").value;
//     document.getElementById("s").value = (x * x);
// }

// let squaref= () => {
//     let x = document.getElementById("num").value;
//     document.getElementById("s").value = (x * x);
// }

// let squaref= function(){
//     let x = document.getElementById("num").value;
//     document.getElementById("s").value = (x * x);
// }

// arrow function
/*let x=()=> "keerthi"+"Nagamalla";
console.log(x());

person={
    id:1,
    name:"keerthi",
    age:18,
    work:() =>"hello kite",
    display:()=> console.log(`id: ${person.id} name : ${person.name} age: ${person.age} work:${person.work()}`)
}
// dont use this for arrow functions.
console.log(person.id);
console.log(person['name']);
person.work();
person.display();*/
// array is a collection of objects with different data types
let arr=[1,1,2,2];
let arr1=new Array("keerthi","kunnathi","abhigna");
/*arr.forEach(a=>{
    if(a%2==0)
    console.log(a);
})
arr1.forEach(a=>{
    if(a.startsWith('k'))
    console.log(a);
})*/
/*console.log(arr)
let k=arr.splice(2,2,"kite","bat")// index,number of elements to remove,elements to add from the given index
console.log(k)
console.log(arr)
let res=arr1.concat(arr)
console.log(arr1.concat(arr))//concat
console.log(res.slice(1,3))*/

arr2=[1,2,3,4,5]
arr3=["a","b","c"]
/*console.log(arr2.concat(arr3,"565"))
let f=4
let hey=[arr3,...arr2,f,"keerthi9381@gmail.com"]
console.log(hey)*/

customer={
    id:3,
    name:"kite"
}
let b={...arr2,...arr3,...customer}
//console.log(arr2.concat(arr3,customer))
console.log(b)