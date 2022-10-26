function loop(){
    for(var i = 0; i < 6; i++){
        console.log(i)
    }
    console.log(i)
}

function letLoop(){
    for(let i = 0; i< 6; i++){
        console.log(i)
    }
    console.log(i)
}

loop();
letLoop();
a = 1
b = '2'
c = a + b
console.log(typeof(c))
console.log(c)
b = 2
c = a + b
console.log(typeof(c))
console.log(c)