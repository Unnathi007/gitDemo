function sq(num1)
{
    //let num1=5
    console.log("Square of "+ num1 +" is "+num1*num1);
}
sq(6)
let sq2=function sq1(num1)
{
    console.log(`Square of ${num1} is ${num1*num1}`)
}
sq2(5)
let sq3=function(num1)
{
    console.log(`Square of ${num1} is ${num1*num1}`)
}
sq3(7)

let sq4 = (num1) => console.log(`Square of ${num1} is ${num1*num1}`)
sq4(9)

let sq5=sq
sq5(3)

function hello()
{
    console.log("hello world");
}
hello()
let hello1=hello
hello1()

function fullName(fname,lname)
{
    return lname+" "+fname
}
let full_name=fullName('karthik', "thadigoppula")
console.log(full_name)
console.log(fullName("karthik","t"))

fullName1= (fname, lname)=> lname+fname
let full_name1=fullName1('karthik', "t")
console.log(full_name1)
console.log(fullName1("karthik","T"))

//fullName1= (fname, lname)=> return lname+fname  //don't write return when flower brackets is not used in arrow function
//since single line arrow fn by default returns