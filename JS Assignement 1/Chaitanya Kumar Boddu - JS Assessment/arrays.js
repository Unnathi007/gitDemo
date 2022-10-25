let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = ["a","b","c","d"]
let array3 = [1, true, "abc", 12,34]

let array4 = new Array(1,2,3,3,4,4,4,5);
let array5 = new Array("a","b","c")


let array6 = array1.concat(array2);
for(let i =0; i < array6.length;i++){
    console.log(array6[i])
}


array6.splice(2, 0, "Lemon", "Kiwi");

for(let i =0; i < array6.length;i++){
    console.log(array6[i])
}

array6.slice(2,3)

for(let i =0; i < array6.length;i++){
    console.log(array6[i])
}

let newarray = [...array1,56,45,56,...array2]

for(let i =0; i < newarray.length;i++){
    console.log(newarray[i])
}


let new2array = {...array1, email:"ck@gmail.com"}
for(let i =0; i < new2array.length;i++){
    console.log(new2array[i])
}