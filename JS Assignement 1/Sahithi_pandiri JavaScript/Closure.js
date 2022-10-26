function multFn(){
    var mult=9;
    return function(val){
        mult=mult*val;
        return mult
    }
}
var f=multFn();
console.log(f(6))