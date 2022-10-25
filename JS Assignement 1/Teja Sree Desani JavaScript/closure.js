function mulFun(){
    let mul = 3
    return function(val){
        mul = mul*val
        return mul
    }
}

let pq = mulFun()
console.log(pq(5))