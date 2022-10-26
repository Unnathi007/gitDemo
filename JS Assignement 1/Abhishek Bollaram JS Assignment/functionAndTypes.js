// named function
function square(num){
    console.log(`${num} power 2 = ${num * num}`)
}

square(256)

let squareRes = function square2(num){
    console.log(`${num} X ${num} = ${num * num}`)
}

squareRes(128)
// square2(any number) will give an error
// anonymous function
let squareVal = function(num){
    console.log(`${num} times itself = ${num * num}`)
}

squareVal(16)

// arrow or lambda function
let squareAns = (num) => console.log(`square of ${num} = ${num * num}`)
squareAns(8)