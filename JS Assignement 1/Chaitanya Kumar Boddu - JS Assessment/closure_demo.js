function multFn(){
var mult = 9;
    return function(val){
       mult = mult * val;
       return mult;
}
}

var mult = multFn();
console.log(mult(18));