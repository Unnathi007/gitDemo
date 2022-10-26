//function nested inside another function
function mltfn(){
    var mult=9;
    return function(val){
        mult = mult * val;
        return mult;
    }
}

var m = mltfn();
console.log(m(18));