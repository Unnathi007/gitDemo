/*
A closure is nested function
It is for accessing 

*/

// function multFn(){
//     var mult=9;
//     return function(val){
//         mult = mult*val;
//         return mult;
//     }
// }

// var fn = multFn()
// console.log(fn(18));

function f1(){
    var x=6;
    function f2(value){
        return x*value;
    }
}

console.log(f2(6));