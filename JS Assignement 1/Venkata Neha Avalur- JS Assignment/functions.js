//named function
function square(number){
     console.log(`square of ${number} = ${number*number}`)
}
square(7);

//using let keyword
let hello1= function sayHello(number)
{
    console.log(`square of ${number} = ${number*number}`)
}
//sayHello(); will return error*/
hello1(7)

let hello2= function(number){
    console.log(`square of ${number} = ${number*number}`)
}
hello2(7)

let hello3 = (number)=> console.log(`square of ${number} = ${number*number}`) //arrow function 
hello3(7)

/*Adv:
1. Simplicity
2. reference to this key word
*/