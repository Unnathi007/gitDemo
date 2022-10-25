let fname = "Chaitanya Kumar"
let lname = "Boddu"

function concat(fn,ln){
    return fn+" "+ln;
}

let concat2 = (fname,lname) => fname + " "+lname;

let fullname = concat(fname,lname)
console.log(`${fullname}`)
console.log(concat2(fname,lname))









