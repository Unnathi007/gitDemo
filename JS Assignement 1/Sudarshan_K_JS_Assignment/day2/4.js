
//named function
function square1(number){
    console.log(number*number*number)
}
square1(7);

//using let keyword
let square2= function square10(number)
{   //square10(10) recursive wroks but deoesnt work outside the function
    console.log(number*number)
}

square2(7)


let square3= function(number){
    console.log(number*number)
}
square3(7)

let square4 = (number)=> console.log(number*number) //arrow function 
square4(7)

// `square of ${number} = ${number*number}`
/*Adv:
1. Simplicity
2. reference to this key word
*/

