//arrays

let arr1 = [1,2,3,4,5,6]

let arr2 = ['Apple','Ball','Cat']

let arr3 = [1,2,'Rohith',3,'Akash',5.0]

let arr4 = new Array(1,2,3,4,5,6)

let arr5 = new Array('Apple','Ball','Cat')

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}

console.log();

arr1.forEach(a => {if(a%2==0) console.log(a);})
