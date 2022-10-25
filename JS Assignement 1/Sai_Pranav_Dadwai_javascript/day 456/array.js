//An array is collection of objects
function print(a){
    for(i=0;i<a.length;i++){
        console.log(a[i])
    }

}
let array=[1,4,7,'lol']
let array1=['lol','pop','loll','popp']
let array2=[1,6,9,4,21,30]
print(array)
array1.forEach(a=>{if(a.startsWith('l'))console.log(a)})
array2.forEach(a=>{if(a%3==0)console.log(a)})
const arr =array.concat(array2, array1)
console.log(arr)
let arr1 = array2.splice(2,4)
console.log(arr1)
const arr3 = array2.splice(2,0,8,9)
console.log(arr3)
console.log(array2)
arr1=[...array2,"lolol",...array]
console.log(arr1)
let[p,q,...r]=arr1
console.log(p)
console.log(q)
console.log(r)
