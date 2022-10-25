function findSquare(num)
{
    console.log(`Square of ${num} is ${num*num}`)
}
findSquare(4);


//Named Function
let sq=function square(num)
{
    console.log(`Square of ${num} is ${num*num}`)
}
sq(4);


//Arrow Function
let squ = (num) => console.log(`Square of ${num} is ${num*num}`)
squ(4)


//Ananymous
let squa = function(num)
{
    console.log(`Square of ${num} is ${num*num}`)
}
squa(4)