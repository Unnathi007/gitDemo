
const arr1 = ["Cecilie", "Lone",true];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin"];
const arr4=1;
const children = arr1.concat(arr2,arr4);//(arr2, arr3);
console.log(arr1+arr2);
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3,1);
console.log(citrus);
const fruit = ["Banana", "Orange", "Apple", "Mango"];

const f1=fruit.splice(2, 0, "Lemon", "Kiwi");
console.log(fruit);
console.log(f1);
const arr5=[...arr1,...arr2];
const ar1=arr1.concat(arr3,['dfg','sfg']);
console.log(ar1);
naruto={
    sensei:['kakashi','iruka'],
    dreamgirl:'sakura',
    lover:'hinata',
    jutsu:'shadow-clone',
    friends:['shikamaru','sasuke'],
    appearance:'fox',
    shadowClone:function(){
       console.log("multiple clones generated");
    }
}
let boruto={...naruto,relation:'son'};
console.log(boruto);
const aa="sdfghk";
console.log([...arr1,...aa]);
//unpacking
let num=[1,2,3,4,5,6,7];
let [p,q,...r]=num;
console.log(p);
console.log(q);
console.log(r);
let a5=true;
console.log(typeof(a5));