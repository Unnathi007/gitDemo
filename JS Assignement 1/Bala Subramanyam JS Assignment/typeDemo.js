
function normal(num)
{
    console.log(`square of ${num} is ${num * num}`);
}
let named = function normal(num)
{
    console.log(`square of ${num} is ${num * num}`);
}

let anonymous = function(num){
    console.log(`square of ${num} is ${num * num}`);
}
let oneLine = (num) => console.log(`square of ${num} is ${num * num}`);


normal(2);
named(5);
anonymous(7);
oneLine(9);

console.log(typeof(normal))
console.log(typeof(named))