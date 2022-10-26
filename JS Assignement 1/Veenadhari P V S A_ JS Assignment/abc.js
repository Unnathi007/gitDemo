// person={
//     id:1,
//     name:'demo',
//    };

// let anotherperson = {...person ,job : 'consultant',email:'someemail@gmail.com'}
// console.log(anotherperson)
// let array1 = ["one","two"]
// let array2 = ["three","four"]
// let newarray = [...array1,"helloworld",...array2,1,2,3,4]
// console.log(newarray)

let array1 = ["one","two"]
let array3= "samatha";
let y= [...array1,...array3]
console.log(y)

let numarray1 = [1,2,3,4,5,6,7,8,9,10]
let [p,q,...r] =numarray1;
console.log(p)
console.log(q)
console.log(r)

let array2 = ['sai','unnathi','sirish','lakshmi']
const newarray10 = array2.splice(2,2,'samatha','lohith')
console.log(array2)
console.log(newarray10)


let variable;
variable = value
typeof(variable)