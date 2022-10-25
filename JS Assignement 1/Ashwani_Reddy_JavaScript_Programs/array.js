let ar1=[1,2,3,4,5]
let arn=['Suda','Uday','Sai Teja','Neha','Veena','Sahithi','Akhila','Unnathi']
let ar2=new Array(6,7,8,9,10)

for(let i=0;i<ar1.length;i++)
{
    console.log(ar1[i])
}
ar2.forEach(a => {
    console.log(a)
})
arn.forEach(a => {
    if(a.startsWith('S'))
    console.log(a)
})

let myGirls = ["Cecilie", "Lone"];
let myBoys = ["Emil", "Tobias", "Linus"];
let myChildren = myGirls.concat(myBoys);
console.log(myChildren)

let arr1 = ["Cecilie", "Lone"];
let arr2 = ["Emil", "Tobias", "Linus"];
let arr3 = ["Robin", "Morgan"];
let myChildren1 = arr1.concat(arr2, arr3);
console.log(myChildren1)

let arr4 = ["Emil", "Tobias", "Linus"];
let myChildren2 = arr4.concat("Peter"); 
console.log(myChildren2)

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)

let ar9=['sai','ram','tej','lucy']
const new10=ar9.splice(2,0,'sam','sun')
console.log(ar9)
console.log(new10)

let fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits1.slice(1,3);
console.log(citrus)

let arr5=['one','two']
let arr6=['three','four']
let out=[...arr5,...arr6]
console.log(out)