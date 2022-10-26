/*
let arr1 = [1, 2, 3, 4]
let arr2 = ['a', 'b', 'c', 'd']
// concat method
let arr3 = arr1.concat(arr2)
console.log(arr1)
console.log(arr3)

let arr4 = arr3.concat(arr1, arr2)
console.log(arr4)

let arr10 = arr1.concat(arr3, 'bat', 'cat')
console.log(arr10)

let arr11 = arr1.concat('hello', arr2, 'name', 1, arr3)
console.log(arr11)

// splice method
// it is used to add and remove elements in an array
arr1.splice(1, 0, 'haha', 'lala')
console.log(arr1)
arr2.splice(0, 10, 'abc', 'bcd')
console.log(arr2)
arr0 = arr3.splice(2, 1, 'any')
console.log(arr0)
// in splice first param -> the index at which the elements need to be added
// second param -> the number of elements to be removed from the array starting from the index specified
// third param -> the elements to be added

// slice method
// it is used to create a new array which is a subarray of the original array
arr5 = arr1.slice(2)
console.log(arr5)
arr6 = arr1.slice(1, 3)
console.log(arr6)
// first param -> start index
// second param -> end index
*/

let ob1 = {
    game : 'valorant',
    level : 'diamond',
    mode : 'classic'
}
let ob2 = {
    ... ob1,
    company : 'tencent',
    creator : 'brenden greene'
}

console.log(ob2)

arr_1 = [1, 2, 3]
arr_2 = [4, 5, 6]
s = 'namasthe'

let m = arr_1.concat(s)
let n = [... arr_2, ... s]
console.log(m, n)

