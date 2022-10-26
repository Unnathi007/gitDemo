// array - collection of objects

let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = ['akhila','sai teja','veena','sahithi','rithvik','uday']
let array3 = [1,false,'true',20.20]
let array4 = new Array(1,2,3,4,5,6,7);
let array5 = new Array('abc','def','ghi','jkl','mno','pqr');

//for loop in two ways

for(let i=0;i<array1.length;i++){
    console.log(array1[i]);
}

array2.forEach(a => {console.log(a)})
