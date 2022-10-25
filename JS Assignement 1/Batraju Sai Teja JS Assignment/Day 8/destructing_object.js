const p = {
    one : '1',
    two : '2',
    three : '3',
    getText : function(){
        console.log(this);
    }
}

const {three,two} = p

//console.log(one);
console.log(two);
console.log(three);