// function f1(value){
//     console.log(value);
// }

// function f2(x,f1){
//     let value = x+x;
//     f1(value);
// }

// f2(5,f1)

function f1() {
    setTimeout(myFunction, 5000);
}

function myFunction() {
    console.log("fwcda");
}

function f2(x, f1) {
    f1();
    console.log("hi");
}

f2(5, f1)

// function myDisplayer(some) {
//     console.log(some);
// }

// function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);