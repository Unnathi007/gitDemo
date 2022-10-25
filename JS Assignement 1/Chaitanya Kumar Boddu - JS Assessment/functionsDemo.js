// Named Functions
function square(num){
    let c = num * num; 
    console.log (`${num}s square is ${c} via Named Function`);
}
square(10);

//variable is function
let square2 = function sq(num) {
    let c = num * num ;
    console.log (`${num}s square is ${c} via variable is function`);
}


square2(9);

// Anonymous Function
let square3 = function(num){
     let c = num * num;
    console.log(`${num}s square is ${c} via Anonymous function`)

}

square3(5);

//Arrow function
let square4 = (num) =>    console.log(`${num}s square is ${num*num} via Arrow function`)

square4(8);