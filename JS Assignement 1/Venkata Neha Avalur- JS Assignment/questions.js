// function sayHello(){
// console.log('hello')
// }
// sayHello();

//console.log("1" - "2")

let hello = function sayHello(){
    console.log('iam been called')
}

// let func1 = (num) => num*num
// console.log(func1(7))

// person={
//     id:1,
//     name:'newname',
//     age:12,
//     work: function(){
//             console.log('person does some work')
//     },
//     display:()=> console.log(`id : ${person.id} name : ${person.name} age : ${person.age}`)
    
// }

// console.log(person.id)

// console.log(person['name'])

// console.log(person.age)

// person.work();

// person.display();


person={
    id:1,
    name:'demo',
   };

let anotherperson = {...person ,job : 'consultant',email:'someemail@gmail.com'}
console.log(anotherperson)

// let array1 = ["one","two"]
// let array2 = ["three","four"]
// let newarray = [...array1,"helloworld",...array2,1,2,3,4]
// console.log(newarray)

// let array1 = ["one","two"]
// let array3= "samatha";
// let x = array1.concat(array3)
// console.log(x)


let array2 = ['sai','unnathi','sirish','lakshmi']
const newarray10 = array2.splice(2,2,'samatha','lohith')
console.log(array2)
console.log(newarray10)

// let array2 = ['sai','unnathi','sirish','lakshmi']
// const newarray11 = array2.slice(2)
// console.log(array2)
// console.log(newarray11)


