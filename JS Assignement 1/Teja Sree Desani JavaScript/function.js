//Named function
function square(a){
    console.log(`Square of ${a} is ${(a*a)}`)
}
square(3)

//Named function
let pq1=function square(a){
    console.log(`Square of ${(a)} is ${(a*a)}`)
}
pq1(4)

//Anonymous Function
let pq2=function(a){
    console.log(`Square of ${(a)} is ${(a*a)}`)
}
pq2(5)

//Arrow Function+
let pq3 = (a) => console.log(`Square of ${(a)} is ${(a*a)}`)
pq3(6)