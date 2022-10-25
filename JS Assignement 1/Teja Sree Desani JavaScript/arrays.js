let array1 = [1,2,3,4,5]
let array2 = ['agvfhg','bhgh','cvhg','ahdgcf','woewhd','adkjch']
let array3 = [1,'teja',3,4,'a']

let array4 = new Array(1,2,3)
let array5 = new Array(1,'a',3)

for(let i=0;i<array1.length;i++){
    console.log(array1[i])
}
console.log('end')
array1.forEach(a=> {if(a%2==0) console.log(a)})
console.log('end')

for(let i=0;i<array1.length;i++){
    if(array1[i]%2==0){
        console.log(array1[i])
    }
}


array2.forEach(x=> {if(x.startsWith('a'))console.log(x)})

console.log(array1.concat(array4))


let fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"]
fruits.splice(2,3,'a','b','c')

console.log(fruits)

fruits.splice(2,3)
console.log(fruits)

let f2= fruits.slice(1,2)
console.log(f2)

let f3=fruits.slice(-3,-2)
console.log(f3)


let ab=['sai','unnathi','sirish','lakshmi']
const b=ab.splice(2,0,'samatha','lohith')
console.log(ab)
console.log(b)


let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [545,547,'234']

console.log(arr1.concat('hello world',arr2,'sdhfg',arr3))


let a=[1,2,3,4,5,6,7]
let [p,q,...r] = a

console.log(p)
console.log(q)
console.log(r)



person={
    id:1,
    name:'demo'
}

let pq={...person, job:'consultant',email:'abc@gmail.com'}
console.log(pq)


let a1=['one','two']
let a2='three'

console.log(a1.concat(a2))
console.log(...a1, ...a2)