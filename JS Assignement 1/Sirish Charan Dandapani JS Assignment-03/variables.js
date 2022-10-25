let age = 12;
let uname = "sirish";
console.log("uname type " + typeof(uname))
let marks = 87.50001;
let name2 = "5";

uname = 34
console.log(`uname type ${typeof(uname)}\nuname= ${uname + 43}`)

console.log(`Sum of integer and float ${age + marks}`)

console.log(`Sum of string and integer ${name2 + 6}`)

console.log(`diff of string and string ${'slkdfj' - 'sdklfj'}`)

console.log(`diff of string and string ${'4' - '7'}`)


function printValue() {
    console.log("for loop with let variable")
    for (let i = 1; i < 5; i++){
        console.log(i)
    }
    // console.log(i)

    console.log("for loop var variable")
    for (var i = 1; i < 5; i++){
        console.log(i)
    }
    console.log(i)
}

printValue();

function isVarStatic() {
    var i = 5
    console.log(i)
}