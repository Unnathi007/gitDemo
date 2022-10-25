//array is a collection of object
let array1 = [1,2,3,4,5,6,7,8,9,10]
let array2 = [1, true, "slkdjf",12.23]

let array3 = new Array(1, 2, 3, 4, 5,)
let array4 = new Array('abc', 'efg', 'xyz')

for(let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

array3.forEach(a => { if(a%2 == 0) console.log(a) })
array4.forEach(a => console.log(a))

/*
    concate or Merge
    Splice
    Slice
    ...
*/

const newarray = array1.concat(array2)
console.log(newarray)

const newarray2 = array1.splice(2, 2)
console.log(newarray2)

const newarray3 = array1.slice(3)
console.log(newarray3)

let array5 = ['sai', 'unnathi', 'sirish', 'lakshmi']
const newarray10 = array5.splice(2,0, 'samatha', 'lohith')
console.log(array5)
console.log(newarray10)

let array6 = ["one", "two"]
let array7 = ["three", "four"]
let array8 = "sdlkfajsd"

let newarray8 = [...array6, ...array7, "five", "six"]
console.log(newarray8)

let newarray9 = [...array6, ...array7]
console.log(newarray9)

let newarray7 = array6.concat(array7)
console.log(newarray7)

array1 = [1,2,3,4,5,6,7,8,9,10]
let [p, q, ...r] = array1;
console.log(p)
console.log(q)
console.log(r)

