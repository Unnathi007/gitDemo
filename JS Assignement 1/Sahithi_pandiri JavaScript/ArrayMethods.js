let array1=[1,2,3,4,5,6,7,8,9];
array1.splice(2,0,10,20);
array1.forEach(element => {
    console.log(element)
});
let array8 = [1,2,3,4,5,6,7]

let array2 = ['sai','akhila','ThugNinja','Veena','saHithi','Uday']

let array3 = [1,true,'saiteja',12.34]

let array4 = new Array(11,12,13,14,15)

let array5 = new Array('a','b','c','d','e')



person = {

    id:1,

    name:'sai'

}

job={

    age:'21',

    occupation:'Hero'

}

let newArray = [...array1,...array2,person.name]

console.log(newArray)

let newArray2 = {...person,...job}

console.log(newArray2)

let a=[1,2,3,4]

let [p,q,...r] = a

console.log(p)

console.log(q)

console.log(r)