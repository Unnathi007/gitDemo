// a closure is the function nested in a function

function mulFn(){
    let num=9
    return function(val){
        num=num*val
        return num
    }
}

let mul = mulFn()
console.log(mul(3));