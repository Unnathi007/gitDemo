function squareOfNumber(a){
    console.log(`Square of ${a} is ${a*a}`);
}

//function with name assigned to variable

let num_square = function numberSquare(a){
    console.log(`Square of ${a} is ${a*a}`);
}

// anonymous function - function without name
let square_num = function(a){
    console.log(`Square of ${a} is ${a*a}`);
}

//arrow function
let square_of_num = (a) => console.log(`Square of ${a} is ${a*a}`);

squareOfNumber(2);
num_square(4);
square_num(6);
square_of_num(8);