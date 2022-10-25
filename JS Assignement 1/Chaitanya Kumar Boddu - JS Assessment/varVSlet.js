function printvalue1(){
    for(let i =1; i <= 5 ; i++){
        console.log(i);
    }

    
}

function printvalue2(){
    for(var i =1; i <= 5 ; i++){
        console.log(i);
    }

    console.log(i);
}

printvalue2();
printvalue1();

//Var is function scope
//Let is block scope like for,if, switch, case, do while

const number1 =100;

number1 =2;

console.log(number1);