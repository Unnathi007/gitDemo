let hello=()=>{
    for(let i =0;i<=3;i++){
        console.log(i)
    }
}
let square= function(a){
console.log(`anonymous function squar ${a*a}`);
}
let square1 =(a)=>{
    console.log(`arrow function square ${a*a}`)
    }

let lol =function squar(a){
    console.log( `named function squar ${a*a}`)
    }
    lol(9)
    square(8)
    square1(5)