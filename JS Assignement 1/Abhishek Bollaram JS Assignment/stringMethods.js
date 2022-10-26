let str = "THE NORTH REMEMBERS"

// charAt(pos) gets the character at the specified position
// if the position is not specified it takes the first position by default
// if the position is greater than that of the length of the string, then nothing is displayed
//console.log(str.charAt(5))

// indexOf('char') gets the index of the first occurence of the character specified
// if the char specified is not found then it returns -1
//console.log(str.indexOf('E'))

// if the pos is specified then it searches for the char starting from the index specified
//console.log(str.indexOf('E', 4))

// not only char but also string can be provided as a parameter (its first occurence)
//console.log(str.indexOf('EM'))

// searches for the string starting from the index specified
//console.log(str.indexOf('EM', 12))


let s = "JavaScript is a scripting language. Scripting languages are often interpreted"
// search allows us to search for strings or regular expressions in a string
// if the specified expression or string is absent then -1 is returned
console.log(s.search(/Scripting/))

// i ignores case
console.log(s.search(/Scripting/i))

console.log(s.search(/Javatpoint/))

let s1 = 'Javatpoint is a good source to learn Java'
//console.log(s.match('Java'))

console.log(s1.substring())

console.log(s1.split(' '))