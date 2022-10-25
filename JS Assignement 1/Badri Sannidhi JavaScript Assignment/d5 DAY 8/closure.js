function multFn()
{
    var mult=2;
    return function(val){
        mult = mult*val
        return mult
    }
}

var multip = multFn();
console.log(multip(18))