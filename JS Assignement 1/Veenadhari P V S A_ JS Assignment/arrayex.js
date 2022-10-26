// let array1= [1,2,3,4,5,6,7,8,9,10]
// let array2 =  new Array(1,true,'unnathi',12.80,'sumana')
// let array3 = ['sai','sahithi']

// // for(let i=0;i<array1.length;i++){
// //     console.log(array1[i]);
// // }
// // //print only even numbers
// // array1.forEach(a => { if(a%2==0) console.log(a)})

// // array2.forEach(a => { if(a.toString().startsWith('s')) console.log(a)})

// let newarray= array1.concat(array2)
// for(let i=0;i<newarray.length;i++){
//     console.log(newarray[i]);
// }

// let newarray2= newarray.splice(0,5)
// console.log('newarray2   '+(newarray2))
// console.log('newarray   '+(newarray))
// console.log('newarray slice  '+newarray.slice(0,5))
// console.log('newarray   '+(newarray))

// let a1 = ["one","two"]
// let a2 = ["three","four"]
// let newa = [...a1,...a2,"sbshbh","ddsdf",1,2,3,4]
// console.log(newa)

// let anotherperson = {...person, job : 'consultant' , email: 'somemail@gmail.com'}
// console.log(anotherperson)






let array1 = [1,2,3,4,5,6,7]

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
