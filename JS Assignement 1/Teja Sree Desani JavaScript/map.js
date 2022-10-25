const colors = ['red', 'white', 'pink', 'blue']
const items = colors.map(color =>
    `<li> + color  + </li>`
)

console.log(items);

const items1 = colors.map(function(color){
    return '<li>' + color  + '</li>'
})

console.log(items1);

let [a,b,...c] = colors

console.log(a);
console.log(b);
console.log(c);