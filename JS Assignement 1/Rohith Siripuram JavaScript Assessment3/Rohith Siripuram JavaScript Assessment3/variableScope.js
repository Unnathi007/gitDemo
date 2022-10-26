
console.log('started...');



function check(){
    // for(var i=0;i<=3;i++){  //var is a function scope
    //     console.log(i);
    // }
    // console.log(i);  //it will not throw any error

    for(let i=0;i<=3;i++){    //let is a block scope
        console.log(i);
    }
    //console.log(i);  //it will give an error


}

check()