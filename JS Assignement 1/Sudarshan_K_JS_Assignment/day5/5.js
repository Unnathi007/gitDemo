const person ={
    name: "nikj",
    fun11(){    console.log(this);}

};
//person.fun11();

const abc= person.fun11;
//console.log(a)
//a()
abc()
// console.log(typeof(person.fun))
// console.log(typeof(person.fun()))