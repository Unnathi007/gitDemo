let array1 = [1,2,3,4,5,6,7]
let array2 = ['sai','akhila','ThugNinja','Veena','saHithi','Uday']
let array3 = [1,true,'saiteja',12.34]
let array4 = new Array(11,12,13,14,15)
let array5 = new Array('a','b','c','d','e')

for(let i=0;i<array1.length;i++)
{
    console.log(array1[i]);
}


array4.forEach(a => {if(a%2==0)console.log(a)})
array2.forEach(a => {if(a.startsWith('s'))console.log(a)})



let newArray = array1.concat(array4)
newArray.forEach(a => {console.log(a)})

let newArray1 = array2.slice(2,5)
newArray1.forEach(a => {console.log(a)})

let newArray2=array3.splice(0,2) /* If there are only two arguments It represents removing elements.position and number of elements. In this case it removes 
2 elements at 0th position. So newArray2 stores the removed elements*/
array3.forEach(a => {console.log(a)})
newArray2.forEach(a => {console.log(a)})
console.log("Array 3 before")
array3.forEach(a => {console.log(a)})
let newArray3 = array3.splice(0,0,1,true)
// console.log("newArray 3")
newArray3.forEach(a => {console.log(a)})
// console.log("array 3")
array3.forEach(a => {console.log(a)})

// let array2 = ['sai','unnathi','sirish','lakshmi']
// const newarray11 = array2.slice(2)
// console.log(array2)
// console.log(newarray11)

// let array1 = ["one","two"]
// let array2 = ["three","four"]
// let newarray = [...array1,"helloworld",...array2,1,2,3,4]
// console.log(newarray)



let variable=20;
variable="string";
console.log(typeof(variable))