let arr1 = [1, 2, 3, 4, 5, 6]
arr = [1, 'hello', 2.4, false]
let arr2 = new Array(1, 2, 3);
let arr3 = new Array('hello', 'namasthe', 'naruto', 23)
for(let i = 0; i < arr.length; i ++){
    console.log(arr[i])
}

arr.forEach(a => {
    if(a == 1){
        console.log(a)
    }
});

arr3.forEach(a =>{ if(a.startsWith('n')) console.log(a)})