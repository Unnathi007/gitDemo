let person={
    id:1,
    name:"venkat",
    age:"12",
    work:()=>{
        console.log("hi")
    },
    display:()=>{
        console.log(`id: ${person.id} age: ${person.age}`)
    }
}
person.work()
person.display()
let car={
    id:1,
    name:"Volksvagon",
    wheel:3,
    price:3500,
    start:()=>{
        console.log('Started')
    }
}
array1=[1,2,3,4,5,6,7,8,9]
array1.forEach(element => {
    if (element%2==0) console.log(element) 
});
a1=[1,2,3]
a2=[2,3,4]
a4=[4,5,6]
a3=a2.concat(a1,"lifgb","ukegb",a4,'oeusfhoih','efu')
console.log(a3)
a1={
    i:1,
    name:"demo"
}
a2={...a1,id:2}
a3=a1.concat(a2)
console.log(a3)
let a;
a=10;
var b;