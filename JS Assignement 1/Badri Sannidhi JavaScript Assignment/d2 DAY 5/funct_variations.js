function sq1(n)
{
    console.log(`Square of ${n} is ${n*n}`)
}

sq1(2);


let sq2 = function square(n)
{
    console.log(`Square of ${n} is ${n*n}`)
}

sq2(3);

let sq3 = function(n)
{
    console.log(`Square of ${n} is ${n*n}`)
}

sq3(4);

let sq4 = n => console.log(`Square of ${n} is ${n*n}`)
sq4(5);