function concatination(first, last){
    return first+' '+last
}
console.log(concatination('teja sree','desani'))

let con1 = function concatination(first, last){
    return first+" " +last
}

console.log(con1('abc','1'))

let con2 = function(first, last){
    return first+" " +last
}

console.log(con1('def','2'))

let con3 = (first, last) => first+" " +last
console.log(con1('ghi','3'))

