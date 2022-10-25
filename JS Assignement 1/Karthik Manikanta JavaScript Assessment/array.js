let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = ['Apple','Ball','Cat','appy']
let arr3 = [1,2,'Rohith',3,'Akash',5.0]
let arr4 = new Array(1,2,3,4,5,6)
let arr5 = new Array('Apple','Ball','Cat')
for(let i=0;i<arr1.length;i++)
{
    console.log(arr1[i]);
}

console.log();

arr1.forEach(a => {if(a%2==0) console.log(a)})

arr2.forEach(a => {if(a.startsWith('a')) console.log(a)})