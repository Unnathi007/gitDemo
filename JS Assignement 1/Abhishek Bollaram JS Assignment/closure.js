function multiply(){
    let mul = 99
    return function(val){
        return mul * val
    }
}

let mult = multiply()
console.log(mult(20))