function printValue()
{
    for(var i=0;i<5;i++)
        console.log(i)
    console.log(i)
}

function printValue2()
{
    for(let i=0;i<5;i++)
        console.log(i)
    console.log(i)
}

printValue()
printValue2()

//var is function scope
//let is block scope like for, if, switch case, do while