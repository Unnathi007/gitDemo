//define the closure
function multFn(){
    var mult=9;
    return function(val){
        mult=mult*val;
        return mult
    }
}

//use the closure
var mult2=multFn();
console.log(mult2(8))

//closure is a nested function