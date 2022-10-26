
function square1(n){
    console.log(`fun1 - simple function - square is ${n*n}`);
}

square1(2)

//named function
let square2 = function fun2(n){
    console.log(`fun2 - named function - square is ${n*n}`);
}

square2(4)

//anonymous function
let square3 = function(n){
    console.log(`fun3 - anonymous function - square is ${n*n}`);
}

square3(6)

//arrow function
let square4 = (n) => console.log(`fun2 - arrow function - square is ${n*n}`);
square4(8)