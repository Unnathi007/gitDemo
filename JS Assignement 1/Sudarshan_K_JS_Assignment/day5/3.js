function multnfn(){
    var mult =9 ;
    return function(val){
        mu=mult*val;
        return mu;
    }

}

var m=multnfn();
console.log(m(18))