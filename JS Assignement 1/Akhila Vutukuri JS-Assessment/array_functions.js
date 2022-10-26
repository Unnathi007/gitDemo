array1 = new Array(1,2,3,4,5,6,7);
array2 = new Array(2,4,7,4,3,1);
//concate
console.log(`concatenation of array1 and array2 is ${array1.concat(array2)}`);
//slice
console.log(`slicing elements in array1 - elements from 1 to 6 are ${array1.slice(0,6)}`);
//splice - removing elements
console.log(`splice adds/removes elements in an array - removing elements from array1 - 3 elements from pos 2 - ${array1.splice(2,3)}`);
//array1 after splicing
console.log(`array1 after splicing is - ${array1}`);
//adding elements
//adding 2 elements and removing 2 elements in array2
console.log(`array2 splicing - ${array2.splice(2,2,'new1','new2')}`);
console.log(array2);


console.log(array1);
console.log(array2);
console.log(array1.concat("hello",array2)); 

let a=[1,2,3,4]

let [p,q,...r] = a

console.log(p)

console.log(q)

console.log(r)
