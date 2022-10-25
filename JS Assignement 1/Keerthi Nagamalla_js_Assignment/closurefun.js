function multf(){
    var mult=9
    return function(val){
        mult=mult*val
        return mult
    }
}
var mult=multf()
console.log(mult(18))