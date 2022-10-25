function mulFn(){
    var mult=9;
    return function(val) {
        mult=mult*val;
        return mult;
    }
}

var mult = mulFn()
console.log(mult(10))