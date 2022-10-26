function mulFun(){
    var mul=9;
    return function(val){
        mul=mul*val;
        return mul;
    }
}

var mul=mulFun();
console.log(mul(28));