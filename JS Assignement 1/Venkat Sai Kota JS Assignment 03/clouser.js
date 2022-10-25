function multFn(){
    var mlt=9;
    return function hi(val){
        mlt=mlt*val;
        return mlt
    }
}
var a=multFn()
console.log(a(9))