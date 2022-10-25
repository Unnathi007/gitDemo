function multFun(){
    var mult=9;
    return function(val){
        mult=mult+val;
        return mult;
    }
}
var mult=multFun();
console.log(mult(18));